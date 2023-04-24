// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import config from ".";



const firebaseConfig = {
  apiKey: config.firebase_apikey,
  authDomain: "react-tube-app-e88c9.firebaseapp.com",
  projectId: "react-tube-app-e88c9",
  storageBucket: "react-tube-app-e88c9.appspot.com",
  messagingSenderId: "1011729458432",
  appId: "1:1011729458432:web:b985cd472cc43ef6f2ffe5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)