import Description from "@/components/Description";
import Imagine from "@/components/Imagine";

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center w-full gap-16 p-16 overflow-hidden">
      <div>
        <Description />
        <div className="flex flex-cols gap-2 py-4">
           <button className="bg-zinc-800 py-2  px-7 rounded-xl">Prev</button>
        <button className="py-2 rounded-xl px-7  bg-[#8A2BE2]">Next</button>
        </div>
       

      </div>
     
      <Imagine />
    </div>
  );
}
