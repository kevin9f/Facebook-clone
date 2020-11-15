// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3Oec8VRDHwJT2sri4Gd__nKBsltVxdmE",
  authDomain: "facebook-clone-d53f0.firebaseapp.com",
  databaseURL: "https://facebook-clone-d53f0.firebaseio.com",
  projectId: "facebook-clone-d53f0",
  storageBucket: "facebook-clone-d53f0.appspot.com",
  messagingSenderId: "833160755505",
  appId: "1:833160755505:web:aee183f1ceba9fe5545810",
  measurementId: "G-8QZKXSC422",
};

// connect our front end to firebase backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
// get access to the database
const db = firebaseApp.firestore();
// allow login and signin
const auth = firebase.auth();
// tell firebase we want google login service
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
