let API_KEY;

async function loadApiKey() {
    try {
        const envResponse = await fetch('.env');
        const envText = await envResponse.text();
        const envLine = envText.split('\n').find(line => line.startsWith('API_KEY='));
        API_KEY = envLine ? envLine.split('=')[1] : 'YOUR_API_KEY_HERE';
    } catch (error) {
        API_KEY = 'YOUR_API_KEY_HERE';
    }
}

const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const elements = {
    cityInput: document.getElementById('cityInput'),
    searchBtn: document.getElementById('searchBtn'),
    loading: document.getElementById('loading'),
    error: document.getElementById('error'),
    weather: document.getElementById('weather'),
    tempValue: document.getElementById('tempValue'),
    weatherIcon: document.getElementById('weatherIcon'),
    weatherDescription: document.getElementById('weatherDescription'),
    humidity: document.getElementById('humidity'),
    windSpeed: document.getElementById('windSpeed'),
    cityName: document.getElementById('cityName')
};

function showLoading() {
    hideAll();
    elements.loading.classList.remove('hidden');
}

function showError(message) {
    hideAll();
    elements.error.classList.remove('hidden');
    elements.error.querySelector('p').textContent = message;
}

function showWeather() {
    hideAll();
    elements.weather.classList.remove('hidden');
}

function hideAll() {
    elements.loading.classList.add('hidden');
    elements.error.classList.add('hidden');
    elements.weather.classList.add('hidden');
}

async function getWeather(city) {
    try {
        showLoading();
        
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=fr`);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Ville non trouvée. Veuillez vérifier le nom de la ville.');
            } else if (response.status === 401) {
                throw new Error('Clé API invalide. Veuillez vérifier votre configuration.');
            } else {
                throw new Error('Erreur lors de la récupération des données météo.');
            }
        }
        
        const data = await response.json();
        displayWeather(data);
        
    } catch (error) {
        console.error('Erreur:', error);
        showError(error.message);
    }
}

function displayWeather(data) {
    const temp = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = Math.round(data.wind.speed * 3.6);
    const icon = data.weather[0].icon;
    const cityName = data.name;
    const country = data.sys.country;
    
    elements.tempValue.textContent = temp;
    elements.weatherDescription.textContent = description;
    elements.humidity.textContent = `${humidity}%`;
    elements.windSpeed.textContent = `${windSpeed} km/h`;
    elements.cityName.textContent = `${cityName}, ${country}`;
    
    elements.weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    elements.weatherIcon.alt = description;
    
    showWeather();
}

function handleSearch() {
    const city = elements.cityInput.value.trim();
    
    if (!city) {
        showError('Veuillez entrer un nom de ville.');
        return;
    }
    
    getWeather(city);
}

elements.searchBtn.addEventListener('click', handleSearch);

elements.cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

elements.cityInput.addEventListener('input', () => {
    if (elements.cityInput.value.trim()) {
        hideAll();
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    await loadApiKey();
    elements.cityInput.focus();
    
    if (API_KEY === 'YOUR_API_KEY_HERE') {
        showError('Veuillez configurer votre clé API OpenWeatherMap dans le fichier .env');
        return;
    }
});