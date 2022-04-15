import { useRouter } from "next/router";

export default function UsersPage() {
   const router = useRouter();
   const { user } = router.query;
   return (
      <div>
         {user}
      </div>
   );
}