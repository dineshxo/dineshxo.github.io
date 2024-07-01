import React from "react";
import Image from "next/image";
import GridLayout from "./gridLayout";

const Grid = () => {
  return (
    <div className="bg-gray-400 min-h-screen flex justify-center p-4 md:p-10">
      <div className="max-w-6xl w-full px-4 py-6 md:px-6 md:py-8 flex flex-col bg-orange-700 relative">
        <div className="bg-red-500 flex flex-col md:flex-row justify-between items-center px-4 py-2 rounded-lg relative">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Get the highlights.
          </h2>
          <div className="flex items-center mt-2 md:mt-0">
            <h3 className="text-lg font-normal text-blue-600">Contact Me</h3>
            <Image
              className="ml-2"
              src="/arrow.png"
              alt="arrow"
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="bg-green-500 h-full mt-4 md:mt-6">
          <GridLayout />
        </div>
      </div>
    </div>
  );
};

export default Grid;
