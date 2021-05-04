import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC-Lht-4aSuo0iTKpioQnZzwyJLcvrasKk",
    authDomain: "szkolenia-automatyka.firebaseapp.com",
    projectId: "szkolenia-automatyka",
    storageBucket: "szkolenia-automatyka.appspot.com",
    messagingSenderId: "589793257156",
    appId: "1:589793257156:web:dca9a6d87db80a05e38b91",
    measurementId: "G-8ZGRW1XJ32"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const providerGoogle = new firebase.auth.GoogleAuthProvider;
export default firebase;