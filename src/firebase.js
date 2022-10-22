import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjZ1DK1g4n76lBhGlUac3Fufg0me7kgjQ",
  authDomain: "rrc-radio.firebaseapp.com",
  projectId: "rrc-radio",
  storageBucket: "rrc-radio.appspot.com",
  messagingSenderId: "954823862845",
  appId: "1:954823862845:web:00414f417aa3add62ad854",
  measurementId: "G-VP2SJVL38W"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);