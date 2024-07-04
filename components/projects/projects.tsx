import React from "react";

const Projects = () => {
  return (
    <div className="bg-zinc-50 min-h-screen flex justify-center  p-2 sm:p-10 ">
      <div className="max-w-5xl w-full px-4    flex flex-col relative ">
        <div className=" flex flex-col sm:flex-row sm:justify-between sm:items-end py-2 rounded-lg relative ">
          <h2 className="text-2xl md:text-5xl font-bold text-zinc-400 mb-2 sm:mb-0">
            Projects
          </h2>
        </div>
        <div className=" flex-grow bg-red-300"></div>
      </div>
    </div>
  );
};

export default Projects;
