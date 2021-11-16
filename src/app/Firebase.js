import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCsMoiY_c_warwThb8HacP44mP8DG8ml1g",
    authDomain: "linkedin-clone-4b75b.firebaseapp.com",
    projectId: "linkedin-clone-4b75b",
    storageBucket: "linkedin-clone-4b75b.appspot.com",
    messagingSenderId: "809943437637",
    appId: "1:809943437637:web:1cdc592b949ef78c412e2c",
    measurementId: "G-SS55TM37Y3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };