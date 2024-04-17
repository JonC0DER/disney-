// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY7l7SCotD3nP2PoQpjTUlFC_2glNvxf0",
  authDomain: "disneyplus-clone-joncoder.firebaseapp.com",
  projectId: "disneyplus-clone-joncoder",
  storageBucket: "disneyplus-clone-joncoder.appspot.com",
  messagingSenderId: "181692303733",
  appId: "1:181692303733:web:fd5448bb9ffb5ca1e52b3c"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;