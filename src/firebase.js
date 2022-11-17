import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  //tambahkan firebaseConfig project
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF-VWBL5aUbTIYzFtQaDko8071eduGbeI",
  authDomain: "vuefire0813.firebaseapp.com",
  databaseURL: "https://vuefire0813-default-rtdb.firebaseio.com",
  projectId: "vuefire0813",
  storageBucket: "vuefire0813.appspot.com",
  messagingSenderId: "101517756969",
  appId: "1:101517756969:web:2a93766ae293ed9b9b2a38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
};

//tambahkan code untuk menginisialisasikan Firebase
const app = initializeApp(firebaseConfig);
//tambahkan code untuk menginisialisasikan Realtime Database
//dan mendapatkan referensi ke database tersebut
export const db = getDatabase(firebaseApp);
