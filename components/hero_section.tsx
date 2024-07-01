import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="h-[100vh] mt-5  flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-3">
        <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden">
          <Image
            className="object-cover"
            src="/dineshxo.jpg"
            alt="dineshxo"
            width={350}
            height={350}
          />
        </div>

        <div className="flex items-center">
          <h3 className="text-lg md:text-xl font-medium">
            Dinesh Manchanayaka
          </h3>
          <Image
            className="object-cover ml-1"
            src="/verified.png"
            alt="dineshxo"
            width={20}
            height={20}
          />
        </div>
        <h1 className="text-2xl md:text-5xl font-bold text-center px-2">
          "Turning Ideas into Functional, World-Class Apps."
        </h1>
        <h2 className="text-lg md:text-2xl font-medium  text-center">
          Full stack Web / Mobile App Developer.
        </h2>
        <div className="flex items-center">
          <h3 className="text-lg font-normal text-blue-600">Contact Me</h3>
          <Image
            className="object-cover ml-2"
            src="/arrow.png"
            alt="dineshxo"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
