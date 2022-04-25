import { auth } from "../lib/firebase";

export default function Enter() {
   const user = null;
   const username = null;
   
   return (
      <main>
         {user ? 
            !username ? <UsernameForm/> : <SignOutButton/>
         :
         <SignInButton/>
         }
      </main>
   );
}

function  SignInButton() {
   const signInButton = async () => {
      await auth.signInWithPopup(googleAuthProvider);
   }
}
function SignOutButton() {
   
}
function UsernameForm() {
   
}