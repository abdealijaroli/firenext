import { useRouter } from "next/router"

export default function UsersPage() {
   const router = useRouter()
   const { usernames } = router.query
   return (
      <div>
         {usernames}'s Page
      </div>
   );
}