// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBzuLvxc5MmPhwZ2ZrKhBicFnQ98fRK6Ik",
  authDomain: "login-email-pass-6f501.firebaseapp.com",
  databaseURL: "https://login-email-pass-6f501.firebaseio.com",
  projectId: "login-email-pass-6f501",
  storageBucket: "login-email-pass-6f501.firebasestorage.app",
  messagingSenderId: "407699876957",
  appId: "1:407699876957:web:9afb08896a8048d90571b4",
  measurementId: "G-7SWBF7XVFB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);