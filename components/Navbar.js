import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../lib/context";

export default function Navbar() {
   const { user, username } = useContext(UserContext);

   return (
      <nav className="navbar">
         <ul>
            <li>
               <Link href="/">
                  <button className="btn-logo">NXT</button>
               </Link>
            </li>

            {/* user is signed-in and has username */}
            {username && (
               <>
                  <li className="push-left">
                     <button /*onClick={signOut}*/>Sign Out</button>
                  </li>
                  <li>
                     <Link href="/admin">
                        <button className="btn-blue">Write Posts</button>
                     </Link>
                  </li>
                  <li>
                     <Link href={`/${username}`}>
                        <img src={user?.photoURL || '/user.jfif'} />
                     </Link>
                  </li>
               </>
            )}

            {/* user is not signed OR has not created username */}
            {!username && (
               <li>
                  <Link href="/enter">
                     <button className="btn-blue">Log in</button>
                  </Link>
               </li>
            )}
         </ul>
      </nav>
   );
}