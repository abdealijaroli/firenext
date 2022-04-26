import { auth } from "../lib/firebase";

export default function Enter() {
   const user = null;
   const username = null;

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
   } catch (error){
      console.log(error);
   }

   return(
      <button className="btn-google" onclick={signInWithGoogle}>
         Sign In With Google
      </button>
   )
}
function SignOutButton() {

}
function UsernameForm() {

}