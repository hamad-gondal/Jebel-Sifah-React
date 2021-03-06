// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5f-eF_2m50yOcOC8fIwqLUFdmo6lmTew",
  authDomain: "jebel-sifah-live-d2001.firebaseapp.com",
  projectId: "jebel-sifah-live-d2001",
  storageBucket: "jebel-sifah-live-d2001.appspot.com",
  messagingSenderId: "1050010857245",
  appId: "1:1050010857245:web:a55d9c2a4b26cede723bf4",
  measurementId: "G-2MH7TXJXT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export default function initFirebase() {
  if (!initializeApp.length) {
    initializeApp(firebaseConfig);
  }
}
