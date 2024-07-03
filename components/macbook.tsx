import React from "react";
import Image from "next/image";

const Macbook = () => {
  return (
    <div className=" min-h-screen flex justify-center  p-2 sm:p-10 ">
      <div className="max-w-5xl w-full px-4    flex flex-col relative ">
        <div className=" flex-grow h-full w-full">
          <Image
            src="/macbook.webp"
            width={1000}
            height={600}
            alt="Github Account"
            unoptimized
          />
        </div>
        <h1 className="text-2xl md:text-5xl font-bold text-center px-2 mt-5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent p-2">
          &quot;Transforming Visions into Innovative, High-Quality
          Applications&quot;
        </h1>
      </div>
    </div>
  );
};

export default Macbook;
