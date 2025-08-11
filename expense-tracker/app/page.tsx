import { currentUser } from "@clerk/nextjs/server";
import Guest from "@/component/Guest";
export default async function Home() {
  const  user= await currentUser ();
     if(!user)
       return <Guest/>;
    return (
    <main>
      
    </main>
  );
}
