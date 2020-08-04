import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCniMyv9czca0bl2bnznQDgOTNLjgOASXE",
    authDomain: "react-project-8c143.firebaseapp.com",
    databaseURL: "https://react-project-8c143.firebaseio.com",
    projectId: "react-project-8c143",
    storageBucket: "react-project-8c143.appspot.com",
    messagingSenderId: "990710993778",
    appId: "1:990710993778:web:835d2afa80d509db2ac3eb",
    measurementId: "G-QB6BDHHR1T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.analytics();

export default firebase;