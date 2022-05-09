import { auth, db } from '../lib/firebase';
import { collection, addDoc, getDocs, doc, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// custom hook to read auth record and user profile doc
export function useUserData() {

   const [user] = useAuthState(auth);
   const [username, setUsername] = useState(null);

   useEffect(() => {
      // turn off realtime subscription 
      let unsubscribe;

      if (user) {
         console.log(user.uid);
         // unsubscribe = getDocs(collection(db, "users")).then(onSnapshot((doc) => {
         //    setUsername(doc.data()?.username);
         // }));
      } else {
         setUsername(null);
      }

      return unsubscribe;
   }, [user]);

   return { user, username };
}
