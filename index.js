// Import stylesheets
import './style.css';
// Firebase App (the core Firebase SDK) is always required
import { initializeApp } from 'firebase/app';

// ...
// ...
// Add the Firebase products and methods that you want to use
import {
  getAuth,
  EmailAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import {} from 'firebase/firestore';


import {} from 'firebase/firestore';

import {} from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCEhwuDpKgKjnuupSbrDpIpWQGs-d6ovg",
  authDomain: "fir-web-codelab-3b385.firebaseapp.com",
  projectId: "fir-web-codelab-3b385",
  storageBucket: "fir-web-codelab-3b385.appspot.com",
  messagingSenderId: "180331922917",
  appId: "1:180331922917:web:acb82d171396bbbd469b0c",
  measurementId: "G-EFR8M6G24H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
auth = getAuth();

const analytics = getAnalytics(app);
import * as firebaseui from 'firebaseui';

// Document elements
const startRsvpButton = document.getElementById('startRsvp');
const guestbookContainer = document.getElementById('guestbook-container');

const form = document.getElementById('leave-message');
const input = document.getElementById('message');
const guestbook = document.getElementById('guestbook');
const numberAttending = document.getElementById('number-attending');
const rsvpYes = document.getElementById('rsvp-yes');
const rsvpNo = document.getElementById('rsvp-no');

let rsvpListener = null;
let guestbookListener = null;

let db, auth;

async function main() {
  // Add Firebase project configuration object here
  const firebaseConfig = {};

  // initializeApp(firebaseConfig);

  // FirebaseUI config
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      // Email / Password Provider.
      EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // Handle sign-in.
        // Return false to avoid redirect.
        return false;
      },
    },
  };

  // Initialize the FirebaseUI widget using Firebase
  const ui = new firebaseui.auth.AuthUI(auth);
  // Listen to the current Auth state
  onAuthStateChanged(auth, user => {
    if (user) {
      startRsvpButton.textContent = 'LOGOUT';
    } else {
      startRsvpButton.textContent = 'RSVP';
    }
  });

  // const ui = new firebaseui.auth.AuthUI(auth);
// Called when the user clicks the RSVP button
startRsvpButton.addEventListener('click', () => {
  if (auth.currentUser) {
    // User is signed in; allows user to sign out
    signOut(auth);
  } else {
    // No user is signed in; allows user to sign in
    ui.start('#firebaseui-auth-container', uiConfig);
  }
});

}
main();
