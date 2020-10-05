import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDvwaTzF2lqhV3XzG2j3GkvOAEgXgXrROM",
    authDomain: "covid-19-4bb44.firebaseapp.com",
    databaseURL: "https://covid-19-4bb44.firebaseio.com",
    projectId: "covid-19-4bb44",
    storageBucket: "covid-19-4bb44.appspot.com",
    messagingSenderId: "119592529883",
    appId: "1:119592529883:web:e2ac60077576fde2db41fe"
};

firebase.initializeApp(firebaseConfig);

//firebase.firestore();

export default firebase;