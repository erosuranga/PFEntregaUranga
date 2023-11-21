// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCbwGSFoNNMN5S_XghLo3JFKSXMB9Jm18",
  authDomain: "e-commerce-139a2.firebaseapp.com",
  projectId: "e-commerce-139a2",
  storageBucket: "e-commerce-139a2.appspot.com",
  messagingSenderId: "80689809661",
  appId: "1:80689809661:web:cef79987d92bb7a0d59694",
  measurementId: "G-RK5F4ZPPEW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
