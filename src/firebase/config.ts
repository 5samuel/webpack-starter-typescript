import firebase from 'firebase/app';
import 'firebase/firestore';
 const firebaseConfig = {
    apiKey: "AIzaSyCVByBwxb2mWeCENNai9Ggp7j2bmJVFomA",
    authDomain: "angeles-app.firebaseapp.com",
    databaseURL: "https://angeles-app-default-rtdb.firebaseio.com",
    projectId: "angeles-app",
    storageBucket: "angeles-app.appspot.com",
    messagingSenderId: "779411017919",
    appId: "1:779411017919:web:ff4eb1033c1e3c6068760a",
    measurementId: "G-SHBXJKXFS4"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  export default firebase.firestore();

