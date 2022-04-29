// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE0nUzHz-ATvA1LCr6dufK3X0HoyKuK1o",
  authDomain: "incap-70b2d.firebaseapp.com",
  projectId: "incap-70b2d",
  storageBucket: "incap-70b2d.appspot.com",
  messagingSenderId: "279400449253",
  appId: "1:279400449253:web:96dc630bded0cc155ec00c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth()
const google = new GoogleAuthProvider()

export {
    app,
    db,
    google,
    auth
}