// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
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
const auth = getAuth(app);


// Sign In
signIn.addEventListener('click', (e) => {
  var EmailLogin = document.getElementById('emailSignIn');

  var PasswordLogin = document.getElementById('pwSignIn');
  console.log = (PasswordLogin);
  const value = PasswordLogin.value

  // console.log(EmailLogin.value);
  // console.log(PasswordLogin.value);
  // var EmailSignUp = document.getElementById('emailSignUp').value;
  // var PasswordSignUp = document.getElementById('pwSignUp').value;

  signInWithEmailAndPassword(auth, EmailLogin, PasswordLogin)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;

    const dt = new Date();
    // location.href = "http://127.0.0.1:5500/project_perangkat_lunak/dashboard.html";
    update(ref(database, 'users/' + user.uid), {
      last_login: dt,
    })

    alert("Berhasil Login");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
});

// Sign Up
signUp.addEventListener('click', (e) => {
  var username = document.getElementById('username').value;
  var EmailSignUp = document.getElementById('emailSignUp').value;
  var PasswordSignUp = document.getElementById('pwSignUp').value;

  createUserWithEmailAndPassword(auth, EmailSignUp, PasswordSignUp)
  .then((userCredential) => {
  // Signed up
  const user = userCredential.user;

  set (ref(database, 'users/' + user.uid), {
    username: username,
    EmailSignUp: EmailSignUp,
    PasswordSignUp: PasswordSignUp

  })
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