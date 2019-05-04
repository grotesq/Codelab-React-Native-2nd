// firebaseApp.js
import firebase from 'firebase';
import 'firebase/firestore';
import config from './firebase-config';

let app;

try {
  app = firebase.initializeApp( config );
}
catch(err) {
  console.log(err);
}

export default app;
