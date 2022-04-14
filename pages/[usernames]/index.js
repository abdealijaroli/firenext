import { useRouter } from "next/router";

export default function UsersPage() {
   const router = useRouter();
   const { id } = router.query;
   return (
      <div>
         User {id} Page
      </div>
   );
}