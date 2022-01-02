
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDIpywmz03aN8xYDs1amkLM-q_-E5_C--Y",
    authDomain: "slack-clone-89144.firebaseapp.com",
    projectId: "slack-clone-89144",
    storageBucket: "slack-clone-89144.appspot.com",
    messagingSenderId: "713236340486",
    appId: "1:713236340486:web:41cfd9bde9ab21ffa5c887",
    measurementId: "G-EXGVY6TCXC"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };