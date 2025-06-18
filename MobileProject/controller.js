// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjJdlfWk1_RTS9w_0q0zIv5oY-7_5tO1Y",
  authDomain: "mobileproject-b5832.firebaseapp.com",
  projectId: "mobileproject-b5832",
  storageBucket: "mobileproject-b5832.firebasestorage.app",
  messagingSenderId: "36725154019",
  appId: "1:36725154019:web:3452e7ed2b7db573a4a5d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);