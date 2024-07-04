"use-client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export const GridLayout = () => {
  return (
    <div className="min-h-screen  ">
      <div className="mx-auto grid max-w-5xl grid-flow-dense grid-cols-12 gap-2">
        <CrossPlatform />
        <RightGridItems />
        <WebDevelopment />
        <ModernTechStack />
        <CleanCode />
      </div>
    </div>
  );
};

type Props = {
  className?: string;
  children: ReactNode;
};
const Block = ({ className, children }: Props) => {
  return (
    <div
      className={twMerge(
        "col-span-4 rounded-xl border  bg-white shadow-md  ",
        className
      )}
    >
      {children}
    </div>
  );
};

const CrossPlatform = () => (
  <Block className="col-span-12 row-span-3 md:col-span-5 flex flex-col justify-between items-center">
    <div className="text-center">
      <h1 className="mb-4 mt-6 text-2xl sm:text-3xl font-bold bg-gradient-to-b from-indigo-500 to-indigo-900 bg-clip-text text-transparent ">
        Mobile Application Development
      </h1>
      <p className="text-zinc-400 text-sm mt-5 mb-6 px-3 ">
        I specialize in creating high-performance mobile applications for both
        Android and iOS using Flutter. By leveraging a unified codebase, I
        ensure faster development and consistent user experiences across
        platforms. My focus is on delivering intuitive and responsive designs
        that engage users seamlessly on any device.
      </p>
    </div>
    <div className="flex gap-2 ">
      <div className="w-[100px] h-[100px] pl-10">
        <Image
          className="object-cover "
          src="/ios.svg"
          alt="App Store Icon"
          width={100}
          height={50}
        />
      </div>
      <div className="w-[100px] h-[100px] pr-12">
        <Image
          className="object-cover"
          src="/playstore.svg"
          alt="Play Store Icon"
          width={100}
          height={50}
        />
      </div>
    </div>
    <div className="flex-grow flex items-end ml-2">
      <Image
        className="object-cover"
        src="/iphone1.png"
        alt="iphone"
        width={600}
        height={650}
      />
    </div>
  </Block>
);

const RightGridItems = () => (
  <>
    <Block className="col-span-12 row-span-2 bg-white md:col-span-4 min-h-24 flex flex-col justify-center">
      <div className="text-center">
        <h1 className="mb-4 mt-6 text-2xl sm:text-3xl font-bold bg-gradient-to-b from-red-400 to-rose-700 bg-clip-text text-transparent ">
          UI/UX
        </h1>
        <p className=" text-sm px-3 text-zinc-400 ">
          Crafting intuitive and engaging user interfaces that enhance user
          experience and drive user satisfaction, ensuring that your application
          is both beautiful and functional.
        </p>
      </div>
      <div className="flex-grow flex items-end justify-center">
        <Image
          className="object-cover pr-2"
          src="/UI.png"
          alt="iphone"
          width={400}
          height={400}
        />
      </div>
    </Block>
    <Block className="col-span-6  md:col-span-3 md:row-span-1 min-h-32 flex justify-center items-center">
      <div className="flex flex-col items-center  ">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
          5+
        </h1>
        <div className="flex flex-col items-center gap-4 md:gap-1 ">
          <p className=" text-md md:text-sm font-medium">Projects</p>
          <div className="bg-lime rounded-full w-[40px] h-[40px] p-2 flex items-center ">
            <Image
              className=""
              src="/arrow.svg"
              alt="arrow"
              width={30}
              height={15}
            />
          </div>
        </div>
      </div>
    </Block>

    <Block className="col-span-6 bg-white md:col-span-3 min-h-24 md:row-span-1 flex flex-col ">
      <div className="flex-grow flex flex-col items-center justify-center md:mt-5 ">
        <h1 className="mt-6 text-2xl sm:text-3xl font-bold text-center bg-gradient-to-b from-slate-500 to-slate-700 bg-clip-text text-transparent">
          Full Stack
        </h1>
        <h1 className="md:text-xl font-medium leading-tight text-zinc-400">
          Development
        </h1>
      </div>
      <div className="flex-grow flex items-end pt-5 ">
        <Image
          className="object-cover"
          src="/backend.png"
          alt="Backend Technologies"
          width={400}
          height={400}
        />
      </div>
    </Block>
  </>
);

const WebDevelopment = () => (
  <Block className="col-span-12 flex justify-center items-center text-3xl leading-snug md:col-span-7 bg-gradient-to-r from-amber-500 to-pink-500 p-2 sm:p-0">
    <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 ">
      <div className="text-center md:text-left md:pl-5 ">
        <h1 className="mb-4 mt-6 text-2xl sm:text-3xl font-bold text-white">
          Web Applications
        </h1>
        <p className="text-zinc-50 text-sm sm:mb-3">
          Explore my work and discover how I can help bring your web application
          ideas to life.
        </p>
      </div>
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
        <Image
          className="object-cover w-full h-auto"
          src="/imac.png"
          alt="imac"
          layout="responsive"
          width={350}
          height={350}
        />
      </div>
    </div>
  </Block>
);

const ModernTechStack = () => (
  <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-4 justify-center p-4">
    <p className="text-center text-2xl sm:text-3xl font-bold p-2 bg-gradient-to-b from-sky-600 to-cyan-800 bg-clip-text text-transparent ">
      Modern Tech Stack.
    </p>
  </Block>
);

const CleanCode = () => (
  <Block className="col-span-12 md:col-span-8 justify-center items-center flex p-4 ">
    <p className="text-center   text-2xl sm:text-3xl font-bold bg-gradient-to-b from-red-500 to-red-800 bg-clip-text text-transparent  ">
      Clean Code. Clean Architecture.
    </p>
  </Block>
);
