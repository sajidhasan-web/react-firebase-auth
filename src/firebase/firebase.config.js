import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEXOUtiDDqqpPpBrrI3m-GTxjJvW25-BQ",
  authDomain: "react-firebase-auth-71729.firebaseapp.com",
  projectId: "react-firebase-auth-71729",
  storageBucket: "react-firebase-auth-71729.appspot.com",
  messagingSenderId: "119356269150",
  appId: "1:119356269150:web:bb413e9ab1742c26ea4acf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;