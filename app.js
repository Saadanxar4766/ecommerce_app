// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

var signup_email = document.getElementById("signup_email")
var signup_password = document.getElementById("signup_password")
var signup_button = document.getElementById("signup_button")
signup_button.addEventListener("click", createuser)
var signin_ui_btn = document.getElementById("signin_ui_btn")
signin_ui_btn.addEventListener("click", signin_ui)
var signout = document.getElementById("signout")
signout.addEventListener("click", sign_out)
var body = document.getElementById("body")


const firebaseConfig = {
    apiKey: "AIzaSyClXAgk70fPxVSr04p2rQ6Q8z2e_dMFXZ8",
    authDomain: "my-first-project-4f43e.firebaseapp.com",
    projectId: "my-first-project-4f43e",
    storageBucket: "my-first-project-4f43e.appspot.com",
    messagingSenderId: "946802935268",
    appId: "1:946802935268:web:13b855e0bc328958b073f1",
    measurementId: "G-TBLXZ937ZX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user exist");
        const uid = user.uid;
    } else {
        console.log("user not exist");
    }
});

function createuser() {
    createUserWithEmailAndPassword(auth, signup_email.value,signup_password.value)
    .then((userCredential) => {
        console.log("account created");
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
    
}

function signin_ui (){
    body.innerHTML = `<div class="wrapper">
    <div class="title">
    SignIn Form
    </div>
    <form action="#">
    <div class="field">
    <input id="signin_email" type="email" required>
    <label>Email Address</label>
    </div>
    <div class="field">
    <input id="signin_password" type="password" required>
    <label>Password</label>
    </div>
    <div class="field">
    <input id="signin_button" type="submit" value="SignIn ">
    </div>
    <div class="signup-link">
    Not a member? <a href="#" id="signup_ui_btn" >SignUp now</a>
    </div>
    </form>
    </div>
            <button id="signout">SignOut</button> `
    var signup_ui_btn = document.getElementById("signup_ui_btn")
    signup_ui_btn.addEventListener("click", signup_ui)
    var signin_email = document.getElementById("signin_email")
    var signin_password = document.getElementById("signin_password")
    var signin_button = document.getElementById("signin_button")
    signin_button.addEventListener("click", signin_user)
}

function signin_user(){
    signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
      .then((userCredential) => {
        console.log("user sign in");
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
}

function signup_ui(){
    body.innerHTML = `<div class="wrapper">
        <div class="title">
           SignUp Form
        </div>
        <form action="#">
           <div class="field">
              <input id="signup_email" type="email" required>
              <label>Email Address</label>
           </div>
           <div class="field">
              <input id="signup_password" type="password" required>
              <label>Password</label>
           </div>   
           <div class="field">
              <input id="signup_button" type="submit" value="SignUp">
           </div>
           <div class="signup-link">
              Not a member? <a href="#" id="signin_ui_btn">SignIn now</a>
           </div>
        </form>
        </div>
                <button id="signout">SignOut</button>`
}

function sign_out(){
    signOut(auth).then(() => {
        console.log("Sign-out successful");
      }).catch((error) => {
        console.log(errorMessage);
      });
}