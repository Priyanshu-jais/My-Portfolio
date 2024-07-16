import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import { RenderModel } from "@/app/Components/RenderModel";
// import HatModel from "@/app/Components/models/HatModel";
import {AboutDetails} from "@/app/Components/about";
import dynamic from "next/dynamic";
const HatModel = dynamic(() => import("@/app/Components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center z-20">

        <div className="absolute flex flex-col items-center text-center  top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">

          <h1 className="font-bold  text-5xl xs:text-4xl sm:text-5xl  lg:text-6xl text-accent font-serif">
            Priyanshu Jaiswal
          </h1>
          <p className="font-light text-foreground text-lg">
           Meet the wizard behind this portfolio
          </p>
        </div> 
      </div>

      <AboutDetails />
    </>
  );
}
