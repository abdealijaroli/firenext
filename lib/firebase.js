import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBQX9iKklOl5K7sSGhwKYbL_s56_duqXS8",
   authDomain: "firenext-6eb25.firebaseapp.com",
   projectId: "firenext-6eb25",
   storageBucket: "firenext-6eb25.appspot.com",
   messagingSenderId: "512345064008",
   appId: "1:512345064008:web:32080535d4161f2fae4e7d",
   measurementId: "G-FBZVDS7DHL"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const googleAuthProvider = new GoogleAuthProvider();
export const popUp =  signInWithPopup;
export const firestore = getFirestore(firebaseApp);