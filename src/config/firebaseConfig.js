 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBtIPOB2nPgFd_enrMNhf3uOZOeAH06x94",
    authDomain: "streetplanner-369b3.firebaseapp.com",
    databaseURL: "https://streetplanner-369b3.firebaseio.com",
    projectId: "streetplanner-369b3",
    storageBucket: "streetplanner-369b3.appspot.com",
    messagingSenderId: "154111456759",
    appId: "1:154111456759:web:128b957af7903ef5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase;