// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvEwtdESmCnXgAE6-zLnBVIcDkiIbnQxA",
  authDomain: "netflixgpt-30083.firebaseapp.com",
  projectId: "netflixgpt-30083",
  storageBucket: "netflixgpt-30083.appspot.com",
  messagingSenderId: "769147872859",
  appId: "1:769147872859:web:d874047483c13e3813c17e",
  measurementId: "G-8GTN25R08G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();