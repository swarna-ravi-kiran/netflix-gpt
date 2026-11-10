// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxtFk7eIBVcPrpsRH3vUGI-xiPhh1fknI",
  authDomain: "netflixgpt-501bb.firebaseapp.com",
  projectId: "netflixgpt-501bb",
  storageBucket: "netflixgpt-501bb.firebasestorage.app",
  messagingSenderId: "521209881278",
  appId: "1:521209881278:web:73c07ea28fe88d4de374ef",
  measurementId: "G-YEPWXGDB46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();