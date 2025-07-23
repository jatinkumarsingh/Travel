// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwu5eQw7Ma5NW8ttqpI-ulQ71GByP86v4",
  authDomain: "travel-app-295c8.firebaseapp.com",
  projectId: "travel-app-295c8",
  storageBucket: "travel-app-295c8.firebasestorage.app",
  messagingSenderId: "472731615005",
  appId: "1:472731615005:web:9cc13e0452a05d2cfb2bf4",
  measurementId: "G-DY03JCZY55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
