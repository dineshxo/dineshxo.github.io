import React, { ReactNode } from "react";
import Image from "next/image";

const ProjectItems = () => {
  return (
    <div className="min-h-screen ">
      <div className="mx-auto grid max-w-5xl grid-flow-dense grid-cols-2 gap-2">
        <ProjectBlock
          img="/food.png"
          title="Food Ordering Application"
          description="Food Order App is a user-friendly mobile application designed to simplify the food ordering and delivery process."
          techIconPath={["/tech_svg/flutter.svg", "/tech_svg/firebase.svg"]}
        />
        <ProjectBlock
          img="/todo.png"
          title="ToDoEase 2.0"
          description="ToDoEase is a Flutter-based mobile application designed to help users manage their daily tasks efficiently. "
          techIconPath={[
            "/tech_svg/flutter.svg",
            "/tech_svg/nodejs.svg",
            "/tech_svg/express.svg",
            "/tech_svg/mongodb.svg",
          ]}
        />
        <ProjectBlock
          img="/portfolio.png"
          title="Portfolio"
          description="Portfolio website for me!. Created with NEXT.JS "
          techIconPath={["/tech_svg/nextjs.svg", "/tech_svg/typescript.svg"]}
        />

        <div className="col-span-2 sm:col-span-1 bg-white p-1 rounded-xl items-center justify-center">
          <div className="h-full flex flex-col items-center justify-center">
            <p className="font-semibold pb-8 text-xl">Explore More Works</p>
            <div className="flex items-center justify-center rounded-full bg-lime">
              <Image
                className=""
                src="/arrow.svg"
                alt="arrow"
                width={100}
                height={15}
              />
            </div>
          </div>
        </div>
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
};

const ProjectBlock = ({ title, description, img, techIconPath }: Props) => {
  return (
    <div className="col-span-2 sm:col-span-1 bg-white p-1 rounded-xl hover:scale-105 shadow-xl">
      <div className="flex ">
        <div className="w-full h-full p-3 ">
          <Image
            src={img}
            width={500}
            height={100}
            alt="i1"
            className="rounded-xl "
          />
          <div className="flex justify-between items-end py-3 ">
            <h1 className="text-xl font-medium  ">{title}</h1>
            <Image
              src="/github.svg"
              width={30}
              height={30}
              alt="github"
              className="rounded-xl"
            />
          </div>
          <p className="text-zinc-400 text-sm  mb-2  text-justify">
            {description}
          </p>
          <div className="flex gap-1">
            {techIconPath.map((icon) => {
              return <TechIcon svgPath={icon} />;
            })}
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
    <div className="border border-red-200 -mr-3 inline-block p-2 rounded-full text-zinc-700 bg-white hover:scale-105 hover:animate-pulse">
      <Image
        src={svgPath}
        width={30}
        height={30}
        alt="i1"
        className="rounded-xl"
      />
    </div>
  );
};
