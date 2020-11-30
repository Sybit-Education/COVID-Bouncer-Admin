# COVID-Bouncer-Admin
Administration of [COVID-Bouncer](https://github.com/Sybit-Education/COVID-Bouncer)

[![Sybit](https://img.shields.io/badge/-Sybit-b71583.svg)](https://www.sybit.de/)
![Node.js CI](https://github.com/Sybit-Education/COVID-Bouncer-Admin/workflows/Node.js%20CI/badge.svg)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/Sybit-Education/COVID-Bouncer-Admin/blob/main/LICENSE)

## Solution

The app is a Vue.js app. For this hackathon we wanted to try two main technologies:

* Vue.js
* Google Firebase to persist data

## Development
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Configuration of Firebase

You have to add `.env` file in the root directory having following environment variables:

```javascript
VUE_APP_FIREBASE_API_KEY="API-Key"
VUE_APP_FIREBASE_AUTH_DOMAIN="xxxx"
VUE_APP_FIREBASE_DATABASE_URL="xxx"
VUE_APP_FIREBASE_PROJECT_ID="xxx"
VUE_APP_FIREBASE_STORAGE_BUCKET="xxxx"
VUE_APP_FIREBASE_MESAGING_SENDER_ID="xxx"
VUE_APP_FIREBASE_APP_ID="xxxx"
VUE_APP_FIREBASE_MEASUREMENT_ID="xxxx"
```
You will get the values if you create a web application for Google Firestore.

## Deployment setup
### Before 
```
npm install -g firebase-tools
```
```
firebase login
```
### Deploying a Vue Site with Firebase Hosting
https://www.youtube.com/watch?v=a-0W40NM0dI

## Manually deployment
### Serve before deploy
```javascript
npm run test-deploy
```
```javascript
npm run deploy
```

## License

[MIT License](LICENSE)
