import React from "react";
import Image from "next/image";
import styles from "./macbook.module.css"; // Import as an object

const Macbook = () => {
  return (
    <div className=" flex justify-center p-2 sm:p-10 mt-10 sm:mt-0">
      <div className="max-w-5xl w-full px-4 flex flex-col relative ">
        <div className="flex flex-col h-full w-full sm:min-h-full justify-center items-center">
          <Image
            src="/macbook.webp"
            width={800}
            height={600}
            alt="Github Account"
            unoptimized
          />

          <h1
            className={`${styles["gradientText"]} text-3xl md:text-6xl lg:text-7xl lg:mt-[50px] lg:mb-[100px] font-bold text-center px-2   first-line:gradient-text p-2 lg:leading-[5rem]  `}
          >
            Transforming Visions into Innovative, High-Quality Applications.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Macbook;
