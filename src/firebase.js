import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    production: false,
  apiKey: "AIzaSyBcU1eRZQ2T_pX9Vs7JXUeBvBuUS--CpXw",
  authDomain: "iintoo-authentication.firebaseapp.com",
  projectId: "iintoo-authentication",
  storageBucket: "iintoo-authentication.appspot.com",
  messagingSenderId: "443164305550",
  appId: "1:443164305550:web:49d13b6bb4842c8fb3c1df"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)