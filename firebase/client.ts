// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALEqEPBhVMP8LNgqQ5sb1uW0hdyNiOlKw",
  authDomain: "talk2hire-ecb0f.firebaseapp.com",
  projectId: "talk2hire-ecb0f",
  storageBucket: "talk2hire-ecb0f.firebasestorage.app",
  messagingSenderId: "868482778746",
  appId: "1:868482778746:web:383fce0119c162f61c1dc3",
  measurementId: "G-XJ65J1ZXVH"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);