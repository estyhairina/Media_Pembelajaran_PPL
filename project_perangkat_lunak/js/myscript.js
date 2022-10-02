// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPg2EcBQL-NMY0XE4PlJTQVTYI_IS2e2I",
  authDomain: "project-media-pembelajaran.firebaseapp.com",
  databaseURL: "https://project-media-pembelajaran-default-rtdb.firebaseio.com",
  projectId: "project-media-pembelajaran",
  storageBucket: "project-media-pembelajaran.appspot.com",
  messagingSenderId: "992474772188",
  appId: "1:992474772188:web:7c84cbf097d7bd07bf3a19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

signUp.addEventListener('click', (e) => {
  var Email = document.getElementById('emailSignUp').value;
  var Password = document.getElementById('pwSignUp').value;

  createUserWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
  // Signed in
  const user = userCredential.user;
  alert("Berhasil");
  // ...
  })
  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage);
  // ..
  });
});