import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
  apiKey: 'AIzaSyB1e46KMCJMdKM4aQp-APrs1SaGqLdDBS4',
  authDomain: 'chat-web-app-a1f61.firebaseapp.com',
  projectId: 'chat-web-app-a1f61',
  storageBucket: 'chat-web-app-a1f61.appspot.com',
  messagingSenderId: '420405679067',
  appId: '1:420405679067:web:ffd55ac4afe930c255cdfe',
};
const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
