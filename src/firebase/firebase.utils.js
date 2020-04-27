import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAMudZyq4lo3c7BF51CXH6yaAf3lXDNHk8",
    authDomain: "crwn-db-d95fa.firebaseapp.com",
    databaseURL: "https://crwn-db-d95fa.firebaseio.com",
    projectId: "crwn-db-d95fa",
    storageBucket: "crwn-db-d95fa.appspot.com",
    messagingSenderId: "696451549980",
    appId: "1:696451549980:web:f4c65073fcb486115f88d9",
    measurementId: "G-930MVKVSCV"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => {
      auth.signInWithPopup(provider)
  };

  export default firebase;