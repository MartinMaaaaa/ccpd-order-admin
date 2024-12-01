// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdw5J9KJ_O-Gllgs3usrvbrxW1Zht1wCw",
  authDomain: "ccpd-order-admin.firebaseapp.com",
  projectId: "ccpd-order-admin",
  storageBucket: "ccpd-order-admin.firebasestorage.app",
  messagingSenderId: "600708609817",
  appId: "1:600708609817:web:9d7607a96c9b76e271b788",
  measurementId: "G-TFR5D6RYGX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);