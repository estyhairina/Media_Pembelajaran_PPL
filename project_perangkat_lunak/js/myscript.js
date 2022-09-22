// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword,
signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPg2EcBQL-NMY0XE4PlJTQVTYI_IS2e2I",
  authDomain: "project-media-pembelajaran.firebaseapp.com",
  projectId: "project-media-pembelajaran",
  storageBucket: "project-media-pembelajaran.appspot.com",
  messagingSenderId: "992474772188",
  appId: "1:992474772188:web:7c84cbf097d7bd07bf3a19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);