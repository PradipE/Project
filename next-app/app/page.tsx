import Image from "next/image";
import Logo from "../public/images/Logo.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StoryWriter from "@/components/ui/StoryWriter";
export default function Home() {


  return (
    <main className=" flex-1 flex flex-col">
      <section className="flex-1 grid grid-cols-1 lg:grid-cols-2" >
      <div className="bg-purple-500 flex flex-col space-y-5 ml-5 p-10 items-center justify-center mb-5 order-1 lg:order-1 mr-10  rounded-md">
       <Image src={Logo} alt="Logo"  className=" h-full w-1/2 rounded-lg" />
        <Button asChild  className=" bg-purple-700 hover:bg-purple-500 lg:text-xl p-3 lg:w-60  ">
          <Link href="/stories" className="text-sm">Explore Story Library</Link>
        </Button>
      </div>
      <div>
        <StoryWriter/>
      </div>
        
      </section>
    </main>
  );
}
