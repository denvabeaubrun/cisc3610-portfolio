# Planet Sights

Planet Sights is an educational Progressive Web App (PWA)
that allows users to explore planets, moons, the Sun,
and black holes through interactive visuals, facts,
and audio narration.

## Features

- Dynamic planet menu powered by JSON
- Interactive planet images
- Fun facts for each celestial body
- Audio narration
- Installable PWA
- Offline support using a service worker
- Responsive mobile-friendly design

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- JSON
- Service Workers
- Web App Manifest

## Installation

### Browser
Open `index.html` or visit the deployed website.

### Mobile Installation
1. Open the website in your browser
2. Tap "Add to Home Screen"
3. Install the app

## Editing the JSON File

Planet data is stored in `data.json`.

To add a new planet or topic:

```json
 {
      "title": "Mercury",
      "type": "planet",
      "description": "Mercury is a heavily cratered, light grey rocky world",
      "image": "images/mercury.png",
      "audio": "audio/mercury.mp3",
      "facts": ["Hottest day, coldest night", "No atmosphere", "Smallest planet", "Closest to the sun"]
    }
