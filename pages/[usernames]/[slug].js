import { useRouter } from "next/router"

export default function UsersPostPage() {
   const router = useRouter()
   const { slug } = router.query
   return (
      <div>
         {slug}'s Page
      </div>
   );
}