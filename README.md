# Weather Application

Une application météo simple et moderne utilisant HTML, CSS, JavaScript et l'API OpenWeatherMap.

## 🎯 Objectifs pédagogiques

- Faire une requête fetch avec JavaScript
- Manipuler une réponse JSON
- Gérer les erreurs réseau
- Afficher dynamiquement des données
- Structurer une UI basée sur des données externes

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec animations et responsive design
- **JavaScript (Vanilla)** : Logique de l'application et gestion d'API
- **OpenWeatherMap API** : Données météo en temps réel

## ✅ Fonctionnalités

- Saisie d'une ville avec recherche
- Affichage des informations météo :
  - Température en Celsius
  - Description météo en français
  - Humidité (%)
  - Vitesse du vent (km/h)
  - Icône météo dynamique
- Gestion des erreurs (ville non trouvée, problème réseau)
- Indicateur de chargement animé
- Design responsive pour mobile et desktop

## 🚀 Installation

1. Clonez ou téléchargez les fichiers du projet
2. Obtenez une clé API gratuite sur [OpenWeatherMap](https://openweathermap.org/api)
3. Ouvrez `script.js` et remplacez `YOUR_API_KEY_HERE` par votre clé API
4. Ouvrez `index.html` dans votre navigateur

## 📱 Utilisation

1. Entrez le nom d'une ville dans le champ de recherche
2. Cliquez sur "Rechercher" ou appuyez sur Entrée
3. Les données météo s'affichent avec un indicateur de chargement
4. En cas d'erreur, un message clair s'affiche

## 🎨 Design

- Interface moderne et épurée
- Palette de couleurs inspirée du ciel (bleu/violet dégradé)
- Animations fluides et transitions
- Design responsive adapté à tous les écrans
- Icônes météo officielles d'OpenWeatherMap

## 🔧 Structure des fichiers

```
Weather/
├── index.html      # Structure HTML de l'application
├── style.css       # Styles et animations CSS
├── script.js       # Logique JavaScript et gestion API
└── README.md       # Documentation du projet
```

## 🌐 API OpenWeatherMap

L'application utilise l'API Current Weather Data d'OpenWeatherMap :
- Endpoint : `https://api.openweathermap.org/data/2.5/weather`
- Paramètres : ville, units=metric, lang=fr
- Format de réponse : JSON

## 📚 Concepts appris

- **Fetch API** : Requêtes HTTP asynchrones
- **Async/Await** : Gestion des opérations asynchrones
- **Manipulation JSON** : Parsing et utilisation des données
- **Gestion d'erreurs** : try/catch et codes d'erreur HTTP
- **DOM manipulation** : Mise à jour dynamique de l'interface
- **Event handling** : Écouteurs d'événements utilisateur
- **Responsive design** : CSS Grid et Flexbox
- **Animations CSS** : Transitions et keyframes