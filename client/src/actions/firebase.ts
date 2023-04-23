// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "react-tube-app-e88c9.firebaseapp.com",
  projectId: "react-tube-app-e88c9",
  storageBucket: "react-tube-app-e88c9.appspot.com",
  messagingSenderId: "1011729458432",
  appId: "1:1011729458432:web:b985cd472cc43ef6f2ffe5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();