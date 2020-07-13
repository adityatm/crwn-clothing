import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCkQP-P9NKUGD4l4P2nhKpnNIITbdQgurU",
    authDomain: "crwn-db-2ad56.firebaseapp.com",
    databaseURL: "https://crwn-db-2ad56.firebaseio.com",
    projectId: "crwn-db-2ad56",
    storageBucket: "crwn-db-2ad56.appspot.com",
    messagingSenderId: "37419327155",
    appId: "1:37419327155:web:2bfb6efcbfb6fb895ddac6",
    measurementId: "G-79XS243S9R"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
