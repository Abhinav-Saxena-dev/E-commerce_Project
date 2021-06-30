import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDyZHABv30SAwbO4WUfH0iSf3FYEkslIsw",
    authDomain: "crown-db-3a135.firebaseapp.com",
    projectId: "crown-db-3a135",
    storageBucket: "crown-db-3a135.appspot.com",
    messagingSenderId: "786749793131",
    appId: "1:786749793131:web:47d43612b8f91c9220e22e",
    measurementId: "G-LBSJJMWWMR"
  };

  firebase.initializeApp(config);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;