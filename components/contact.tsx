import React from "react";
import Image from "next/image";
import styles from "./macbook.module.css";
import Link from "next/link";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section id="contact">
      <div className="flex justify-center p-2 sm:p-10">
        <div className="max-w-5xl w-full flex p-4 rounded-xl flex-col">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 p-2">
            <Image
              src="/dineshxo.jpg"
              alt="Dinesh Manchanayaka"
              width={50}
              height={50}
              className="object-cover rounded-full"
            />
            <div className="text-center flex">
              <h1 className="text-xl md:text-3xl font-semibold text-zinc-400">
                Let&apos;s Make Great Things Happen.
              </h1>
            </div>
          </div>
          <p className="text-sm text-justify p-2 text-zinc-400 leading-6">
            I&apos;m an undergraduate student at Sabaragamuwa University of Sri
            Lanka, majoring in Computing and Information Systems. Currently,
            I&apos;m deeply immersed in Flutter development for mobile
            applications and full-stack web development. I&apos;m passionate
            about leveraging technology to solve real-world problems and enhance
            user interactions. As I continue to expand my skills and knowledge,
            I&apos;m excited about exploring new technologies and methodologies
            that drive innovation. Feel free to reach out to me through the
            contact form below or connect with me on social media.
          </p>

          <div className="mt-5 ">
            <div className="mx-auto grid max-w-5xl  grid-flow-dense grid-cols-6 gap-2 ">
              <div className="col-span-2 md:col-span-2 flex items-center justify-center shadow-lg rounded-xl bg-white ">
                <Link
                  href="mailto:dev.dineshmanchanayaka@gmail.com"
                  target="_black"
                >
                  <div className="gap-2 items-center  flex">
                    <Image
                      src="/gmail.svg"
                      width={30}
                      height={30}
                      alt="gmail"
                    />

                    <p className="text-zinc-600 text-md sm:text-md font-semibold hidden sm:flex">
                      Contact
                    </p>
                  </div>
                </Link>
              </div>
              <div className="col-span-2 md:col-span-2 flex items-center justify-center shadow-lg rounded-xl bg-white ">
                <Link
                  href="https://www.linkedin.com/in/dinesh-manchanayaka/"
                  target="_black"
                >
                  <div className="gap-2 items-center  flex">
                    <Image
                      src="/linkedin.svg"
                      width={30}
                      height={30}
                      alt="linkedIn"
                    />

                    <p className="text-zinc-600 text-md sm:text-md font-semibold hidden sm:flex">
                      Connect
                    </p>
                  </div>
                </Link>
              </div>

              <div className="col-span-2 md:col-span-2 bg-white">
                <div className="flex p-2  items-center justify-center gap-3 shadow-lg rounded-xl">
                  <Link
                    href="https://github.com/dineshxo"
                    className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                    target="_black"
                  >
                    <div className="w-[35px] sm:w-[50px] flex items-center justify-center">
                      <Image
                        src="/github.svg"
                        width={30}
                        height={30}
                        alt="github"
                      />
                    </div>
                  </Link>
                  <Link
                    href="https://www.behance.net/dineshmk"
                    className="transform transition-transform duration-300 ease-in-out hover:scale-105"
                    target="_black"
                  >
                    <div className="w-[40px] sm:w-[60px] flex items-center justify-center">
                      <Image
                        src="/behance.svg"
                        width={35}
                        height={30}
                        alt="behance"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-zinc-300 text-sm">
        &copy;dineshxo {currentYear}
      </h1>
    </section>
  );
};

export default Contact;
