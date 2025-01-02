import Description from "@/components/Description";
import Imagine from "@/components/Imagine";

export default function Home() {
  return (
    <div className="h-screen p-4 flex flex-col items-center justify-center md:justify-between  w-full md:p-16 m-4yy md:flex-row">
      <div className="mb-4 md:mb-0">
        <Description />
      </div>
     
      <Imagine />
     
    </div>
  );
}
