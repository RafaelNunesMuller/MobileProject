// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjJdlfWk1_RTS9w_0q0zIv5oY-7_5tO1Y",
  authDomain: "mobileproject-b5832.firebaseapp.com",
  projectId: "mobileproject-b5832",
  storageBucket: "mobileproject-b5832.firebasestorage.app",
  messagingSenderId: "36725154019",
  appId: "1:36725154019:web:ce410549f8726c28a4a5d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);