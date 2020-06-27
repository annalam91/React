import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBHn3wkIAcK9p-cJ_Aqwcbla0XzOVbXZuI",
    authDomain: "recipe-tutorial-5c192.firebaseapp.com",
    databaseURL: "https://recipe-tutorial-5c192.firebaseio.com",
    projectId: "recipe-tutorial-5c192",
    storageBucket: "recipe-tutorial-5c192.appspot.com",
    messagingSenderId: "724651183472",
    appId: "1:724651183472:web:724a06dcdfe4f7c63753b5"
});

export { firebaseConfig as firebase };