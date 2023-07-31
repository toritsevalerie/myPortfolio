// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA9x2s0KNxrGv31Om6E35ZudYLoVBr9xxA",

  authDomain: "toritsevalerieportfolio-64ab8.firebaseapp.com",

  databaseURL:
    "https://toritsevalerieportfolio-64ab8-default-rtdb.firebaseio.com",

  projectId: "toritsevalerieportfolio-64ab8",

  storageBucket: "toritsevalerieportfolio-64ab8.appspot.com",

  messagingSenderId: "851139540367",

  appId: "1:851139540367:web:d7752eed628cf25b74c7fa",

  measurementId: "G-54F9XW8LC6",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export default app;
