import React from "react";
import Image from "next/image";
import { projects } from "../../constants/projects";
import Link from "next/link";

const ProjectItems = () => {
  return (
    <div className="min-h-screen ">
      <div className="mx-auto grid max-w-5xl grid-flow-dense grid-cols-2 gap-2 transition-[gap] duration-600 ease-in-out hover:gap-4">
        {projects.map((project, index) => (
          <ProjectBlock
            key={index}
            img={project.img}
            title={project.title}
            description={project.description}
            techIconPath={project.techIconPath}
            gitRepo={project.gitRepo}
          />
        ))}
        {ExploreMore}
      </div>
    </div>
  );
};

export default ProjectItems;

type Props = {
  title: string;
  description: string;
  img: string;
  techIconPath: string[];
  gitRepo: string;
};

const ProjectBlock = ({
  title,
  description,
  img,
  techIconPath,
  gitRepo,
}: Props) => {
  return (
    <div className="col-span-2 sm:col-span-1 bg-white p-1 rounded-xl shadow-xl border hover:scale-105 transition-transform duration-300">
      <div className="flex">
        <div className="w-full h-full p-3">
          <Image
            src={img}
            width={500}
            height={100}
            alt="i1"
            className="rounded-xl"
          />
          <div className="flex justify-between items-end py-3">
            <h1 className="text-xl font-medium">{title}</h1>
          </div>
          <p className="text-zinc-400 text-sm mb-2 text-justify">
            {description}
          </p>
          <div className="flex gap-1 justify-between mt-3">
            <div>
              {techIconPath.map((icon, idx) => (
                <TechIcon key={idx} svgPath={icon} />
              ))}
            </div>
            <Link
              href={gitRepo}
              target="_blank"
              className="hover:scale-110 animate-pulse"
            >
              <Image
                src="/github.svg"
                width={30}
                height={30}
                alt="github"
                className="rounded-xl"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

type TechProps = {
  svgPath: string;
};

const TechIcon = ({ svgPath }: TechProps) => {
  return (
    <div className="border border-orange-200 -mr-3 inline-block p-2 rounded-full bg-white hover:scale-105 hover:animate-pulse transition-transform duration-300">
      <Image
        src={svgPath}
        width={30}
        height={30}
        alt="tech"
        className="rounded-xl"
      />
    </div>
  );
};

const ExploreMore = (
  <div className="col-span-2 sm:col-span-1 bg-white p-1 rounded-xl items-center justify-center">
    <div className="h-full flex flex-col items-center justify-center">
      <p className="font-semibold pb-8 text-lg md:text-xl text-zinc-500">
        Explore More Works
      </p>
      <div className="flex items-center justify-center rounded-full bg-lime animate-bounce w-12 h-12 md:w-[100px] md:h-[100px]">
        <Image
          className="w-[40px]  md:w-[100px]"
          src="/arrow.svg"
          alt="arrow"
          width={100}
          height={15}
        />
      </div>
    </div>
  </div>
);
