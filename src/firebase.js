// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDGYqCJYSgzQtnHeA1JAxxX1LK3f4fhReQ",
  authDomain: "e-comm-49695.firebaseapp.com",
  projectId: "e-comm-49695",
  storageBucket: "e-comm-49695.appspot.com",
  messagingSenderId: "728050582258",
  appId: "1:728050582258:web:3c56fcea7bceb34294466b",
  measurementId: "G-NBTWZK9E3P"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};