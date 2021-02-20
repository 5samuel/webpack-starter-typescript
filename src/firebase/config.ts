import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCXQHtPutoIg5lggArbefMoubLmGqadwjA",
    authDomain: "sql-demos-1c711.firebaseapp.com",
    databaseURL: "https://sql-demos-1c711-default-rtdb.firebaseio.com",
    projectId: "sql-demos-1c711",
    storageBucket: "sql-demos-1c711.appspot.com",
    messagingSenderId: "515929991343",
    appId: "1:515929991343:web:cd2453fc7587dcad100c5a",
    measurementId: "G-SC80QPSJ4F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()