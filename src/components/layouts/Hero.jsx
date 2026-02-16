import React from "react";
import { cn } from "@/lib/utils";
import { styles } from "@/style/styles";
import Computers from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="bg-hero-pattern relative w-full h-screen mx-auto">
      <div
        className={cn(
          "absolute inset-0 top-30 max-w-7xl mx-auto flex flex-row items-start gap-5",
          styles.paddingX
        )}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1
            className={cn(
              "text-white",
              styles.heroHeadText
            )}
          >
            Hi, I'm <span className="text-[#915eff]">Rahi</span></h1>
          <p
            className={cn(
              "text-white-100 mt-2",
              styles.heroSubText
            )}>
            I develop 3D visuals, user <br className="sm:block hidden" /> interfaces and web applications.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center items-end h-1/2">
        <div className="w-full max-w-4xl h-full">
          <Computers />
        </div>
      </div>
    </section>
  )
};

export default Hero;
