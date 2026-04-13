// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv_5E0iyGdaIM9IVwxK6eecAuxqkD-Afs",
  authDomain: "tropp-fun-radio-41346.firebaseapp.com",
  projectId: "tropp-fun-radio-41346",
  storageBucket: "tropp-fun-radio-41346.appspot.com",
  messagingSenderId: "1024287774915",
  appId: "1:1024287774915:web:dcf8d692eca618bf362a76",
  measurementId: "G-R4Q9BX8XZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
