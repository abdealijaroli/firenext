import { auth } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Enter() {
   const { user, username } = useContext(UserContext);

   return (
      <main>
         {user ?
            !username ? <UsernameForm /> : <SignOutButton />
            :
            <SignInButton />
         }
      </main>
   );
}

function SignInButton() {
   try {
      const signInWithGoogle = async () => {
         await auth.signInWithPopup(googleAuthProvider);
      }
   } catch (error) {
      console.log(error);
   }

   return (
      <button className="btn-google" onclick={signInWithGoogle}>
         Sign In With Google
      </button>
   )
}
function SignOutButton() {

}
function UsernameForm() {

}