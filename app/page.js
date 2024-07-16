import Image from "next/image";
import bg from "../../public/background/home-background.png"
import { RenderModel } from "./Components/RenderModel";
// import Wizard from "./Components/models/Wizard";
import  Navigation  from "./Components/navigation";
import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("./Components/models/Wizard"), {
  ssr: false,
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
    <Image src={bg} priority sizes="100vw" alt="background-image"fill className="-z-50 w-full h-full object-cover object-center opacity-15"></Image>
    <div className="w-full h-screen">
      {/* navigation and 3d model  */}
      <Navigation/>
      <RenderModel>
        <Wizard/>
      </RenderModel>
    </div>

    </main>
  );
}
