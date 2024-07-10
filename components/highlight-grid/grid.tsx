import React from "react";
import Image from "next/image";
import { GridLayout } from "./gridLayout";
import Link from "next/link";

const Grid = () => {
  return (
    <div className="bg-zinc-50 min-h-screen flex justify-center  p-2 sm:p-10 ">
      <div className="max-w-5xl w-full px-4    flex flex-col relative ">
        <div className=" flex flex-col sm:flex-row sm:justify-between sm:items-end py-2 rounded-lg relative ">
          <h2 className="text-2xl md:text-4xl font-bold text-zinc-200 mb-2 sm:mb-0">
            Experience Top-Notch Services.
          </h2>
          <div className=" items-center sm:mt-2 md:mt-0 hidden sm:flex">
            <Link href="#projects">
              <h3 className="text-md  font-normal text-blue-600">
                Explore more
              </h3>
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
        <div className=" flex-grow">
          <GridLayout />
        </div>
      </div>
    </div>
  );
};

export default Grid;
