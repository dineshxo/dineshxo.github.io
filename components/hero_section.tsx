import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="md:h-[100vh] sm:mt-20 md:mt-20 lg:mt-15 xl:mt-10 mt-20 flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center gap-3">
          <Image
            className="object-cover absolute -mt-[100px] md:-mt-[170px]"
            src="/header-gradient.svg"
            alt="dineshxo"
            width={2000}
            height={500}
          />
          <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden">
            <Image
              className="object-cover"
              src="/dineshxo.jpg"
              alt="dineshxo"
              width={350}
              height={350}
            />
          </div>
          <div className="flex items-center flex-col">
            <div className="flex items-center">
              <h3 className="text-lg md:text-xl font-medium">
                Dinesh Manchanayaka
              </h3>
              <Image
                className="object-cover ml-1"
                src="/verified.svg"
                alt="dineshxo"
                width={25}
                height={25}
              />
            </div>
            <h3 className="text-sm md:text-lg font-medium text-zinc-500">
              @dineshxo
            </h3>
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-center px-2">
            &quot;Turning Ideas into Functional, World-Class Apps.&quot;
          </h1>
          <h2 className="text-lg md:text-2xl font-medium text-center">
            Full stack Mobile / Web App Developer.
          </h2>
          <div className="flex items-center">
            <Link href="#contact">
              <h3 className="text-md font-normal text-blue-600">Contact Me</h3>
            </Link>
            <Image
              className=""
              src="/arrow.png"
              alt="arrow"
              width={15}
              height={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
