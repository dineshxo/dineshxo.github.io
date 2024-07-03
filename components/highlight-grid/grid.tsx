import React from "react";
import Image from "next/image";
import { GridLayout } from "./gridLayout";

const Grid = () => {
  return (
    <div className="bg-zinc-50 min-h-screen flex justify-center p-10 ">
      <div className="max-w-5xl w-full px-4    flex flex-col relative ">
        <div className=" flex flex-col sm:flex-row justify-between items-end py-2 rounded-lg relative ">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-300 py-2">
            Get the highlights.
          </h2>
          <div className="flex items-center mt-2 md:mt-0">
            <h3 className="text-md  font-normal text-blue-600">Contact Me</h3>
            <Image
              className=""
              src="/arrow.png"
              alt="arrow"
              width={15}
              height={20}
            />
          </div>
        </div>
        <div className=" flex-grow">
          <GridLayout />
        </div>
      </div>
    </div>
  );
};

export default Grid;
