
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFmJ-QVaId6xd17b6sfdbBSc2N9MQVWfY",
  authDomain: "contact-page-ace2a.firebaseapp.com",
  projectId: "contact-page-ace2a",
  storageBucket: "contact-page-ace2a.appspot.com",
  messagingSenderId: "280117386810",
  appId: "1:280117386810:web:e0f3a888339b1ffe3a5f03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
var db = getFirestore();

export {db} ;