import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB46AMyezcrEDR7-DYDMZJGk6aZ1CIWqLM",
  authDomain: "shopmate-8e5f2.firebaseapp.com",
  projectId: "shopmate-8e5f2",
  storageBucket: "shopmate-8e5f2.firebasestorage.app",
  messagingSenderId: "96220179863",
  appId: "1:96220179863:web:e1dcd87927d566b1f968d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db