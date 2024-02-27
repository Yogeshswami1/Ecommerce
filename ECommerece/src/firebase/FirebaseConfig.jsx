// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcLVlcFzyWZV_s_4fximPDZ7i33c__YnA",
  authDomain: "ecommerce-21ba7.firebaseapp.com",
  projectId: "ecommerce-21ba7",
  storageBucket: "ecommerce-21ba7.appspot.com",
  messagingSenderId: "694238940325",
  appId: "1:694238940325:web:34c4ed8a370c3f058cd14c"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }