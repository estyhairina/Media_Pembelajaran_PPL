// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
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
const auth = getAuth(app);
const database = getDatabase(app);

const signInbtn = document.getElementById("sign-in-btn");
const signUpbtn = document.getElementById("sign-up-btn");

signUpbtn.addEventListener('click', (e) =>{
  let name = document.getElementById("name").value;
  let Email = document.getElementById("email-sign-up").value;
  let pwSignUp = document.getElementById("pw-sign-up").value;
  let pwConfir = document.getElementById("pw-confirm").value;

  // var name = document.getElementById("name").value;
  // var Email = document.getElementById("email-sign-up").value;
  // var pwSignUp = document.getElementById("pw-sign-up").value;

  createUserWithEmailAndPassword(auth, Email, pwConfir)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;

    set(ref(database, "users/" + user.uid), {
      name : name,
      Email : Email,
      pwSignUp : pwSignUp
      });
    // ...
    alert("User Telah ditambahkan");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    alert(errorMessage);
  });
});