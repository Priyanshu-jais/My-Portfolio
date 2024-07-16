import React from "react";
import ItemLayout from "./ItemLayout";

export const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            My journey in web development is powered by an array of mystical
            tools and languages, with JavaScript casting the core of my
            enchantments. I wield frameworks like React.js and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web.
            <br />
            <span className="text-accent"></span>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+ <sub className="font-semibold text-base">projects</sub>{" "}
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1+<sub className="font-semibold text-base">year of experience</sub>{" "}
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Priyanshu-jais&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Priyanshu"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Priyanshu-jais&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="Priyanshu"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,react,redux,vite,nextjs,nodejs,express,mongodb,mysql,c,cpp,python,java,tailwind,discord,git,github,postman,d3,stackoverflow,figma,vscode,windicss,windows,vercel,tensorflow,ros,npm,jquery,linkedin,arduino,linux,threejs,wordpress"
            alt="Priyanshu"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-streak-stats.herokuapp.com?user=Priyanshu-jais&theme=dark&hide_border=true&type=png&background=FEFE5B00&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="GitHub Streak"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=Priyanshu-jais&repo=My-Portfolio&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="repo card"
            loading="lazy"
          />
        </ItemLayout>
        {/* Leet Code */}
        <ItemLayout
          className={"col-span-full md:col-span-6 !p-0 bg-background"}
        >
          <img
            className="w-full h-auto"
            src="https://leetcard.jacoblin.cool/priyanshujaiswal184?theme=dark&ext=heatmap&source=leetcode&font=Oldenburg"
            alt="LeetCode Profile"
            loading="lazy"
          />
        </ItemLayout>
      
      </div>
    </section>
  );
};
