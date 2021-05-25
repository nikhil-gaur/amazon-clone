import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAE49S1fOqVR4-u9nAmIxXbiaxY_g8MIi4",
    authDomain: "clone-1473c.firebaseapp.com",
    databaseURL: "https://clone-1473c.firebaseio.com",
    projectId: "clone-1473c",
    storageBucket: "clone-1473c.appspot.com",
    messagingSenderId: "27460066543",
    appId: "1:27460066543:web:b6526cce42aee7ffd60f1a",
    measurementId: "G-TWMW19Z1MM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};