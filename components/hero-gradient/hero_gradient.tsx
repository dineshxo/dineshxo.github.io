import React from "react";
import { BackgroundGradientAnimation } from "./background-gradient-animation";

export function BackgroundGradientAnimationHeader() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <p className="bg-clip-text lg:p-[30px] text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          Turning Ideas into Functional, World-Class Apps.
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
