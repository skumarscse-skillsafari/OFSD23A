// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLz5zjbaejuSN8DzE5JVGNVyiFQceBUPI",
  authDomain: "ofsd23a-remainder-app.firebaseapp.com",
  projectId: "ofsd23a-remainder-app",
  storageBucket: "ofsd23a-remainder-app.appspot.com",
  messagingSenderId: "277226815040",
  appId: "1:277226815040:web:a127ee813344d9db2769a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
