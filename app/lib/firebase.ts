// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDExbeAI9_0TBhxGD80oMBfmXrD4-CcwS0",

  authDomain: "advanced-virtual-intership2.firebaseapp.com",

  projectId: "advanced-virtual-intership2",

  storageBucket: "advanced-virtual-intership2.firebasestorage.app",

  messagingSenderId: "475197936035",

  appId: "1:475197936035:web:6a6354b24750c503d58a16",

  measurementId: "G-DDC3DTELVS",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
