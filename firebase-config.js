import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXskxp0w8tAlJv-6mCz-FN5sCuJagFpN4",
  authDomain: "ladywear-collection-c9284.firebaseapp.com",
  projectId: "ladywear-collection-c9284",
  storageBucket: "ladywear-collection-c9284.firebasestorage.app",
  messagingSenderId: "276056105346",
  appId: "1:276056105346:web:e54c9912b066032691ef9b",
  measurementId: "G-Z863Y8GPSV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
