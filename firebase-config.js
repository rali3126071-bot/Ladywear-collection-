// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXskxp0w8tAljV-6mCz-FN5sCuJagFpN4",
  authDomain: "ladywear-collection-c9284.firebaseapp.com",
  databaseURL: "https://ladywear-collection-c9284-default-rtdb.firebaseio.com",
  projectId: "ladywear-collection-c9284",
  storageBucket: "ladywear-collection-c9284.firebasestorage.app",
  messagingSenderId: "276056105346",
  appId: "1:276056105346:web:e54c9912b066032691ef9b",
  measurementId: "G-Z863Y8GPSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
