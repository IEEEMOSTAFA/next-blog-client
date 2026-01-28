import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cookies } from "next/headers";

export default async function Home() {
  // const session =  await authClient.getSession();
  // console.log(session);
   const cookieStore = await cookies();
   console.log(cookieStore);

   const res = await fetch("http://localhost:5000/api/auth/get-session");
   console.log(await res.json());

  return (
    <div>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}
