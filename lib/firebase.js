import firebase, { getApp, initializeApp} from "firebase/app"
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
   apiKey: "AIzaSyBQX9iKklOl5K7sSGhwKYbL_s56_duqXS8",
   authDomain: "firenext-6eb25.firebaseapp.com",
   projectId: "firenext-6eb25",
   storageBucket: "firenext-6eb25.appspot.com",
   messagingSenderId: "512345064008",
   appId: "1:512345064008:web:32080535d4161f2fae4e7d",
   measurementId: "G-FBZVDS7DHL"
};

const app = initializeApp(firebaseConfig);

export const auth = getApp(app);
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = app.firestore();
export const storage = app.storage();