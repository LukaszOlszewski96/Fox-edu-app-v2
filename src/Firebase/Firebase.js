import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDcjDRamw2G7zP7s00atz0oPEhAl2GXmXc",
    authDomain: "unien2021.firebaseapp.com",
    projectId: "unien2021",
    storageBucket: "unien2021.appspot.com",
    messagingSenderId: "116472617313",
    appId: "1:116472617313:web:88cd46c28b8b5533654d20",
    measurementId: "G-XKJLT3D7ZR"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebaseApp.firestore();

export { db, firebase };
export const auth = firebase.auth;
export const providerGoogle = new firebase.auth.GoogleAuthProvider;
export const provider = new firebase.auth.FacebookAuthProvider();
export default firebase;