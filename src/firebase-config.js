// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWsgiVaPW7II6E-PojQpq-YXUvoUFPFVA",
    authDomain: "webbooking-57a78.firebaseapp.com",
    databaseURL: "https://webbooking-57a78-default-rtdb.firebaseio.com",
    projectId: "webbooking-57a78",
    storageBucket: "webbooking-57a78.appspot.com",
    messagingSenderId: "363741238128",
    appId: "1:363741238128:web:5171c5c2be83f00555b5b5",
    measurementId: "G-VQMHN74PVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);