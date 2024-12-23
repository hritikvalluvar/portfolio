"use client";

import { FaLocationArrow } from "react-icons/fa6";
import React, { useEffect, useState } from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link"; // Add this if using Next.js

const RecentProjects = () => {
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to update isClient once the component has mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              {/* Use Link for navigation */}
              <Link href={item.link} passHref>
                <PinContainer title={item.link} href={item.link}>
                  {/* Only render the 3D effect once on the client side */}
                  {isClient && (
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 group perspective-[1000px]">
                      <div
                        className="relative w-full h-full overflow-hidden lg:rounded-3xl transition-transform duration-500 group-hover:rotate-x-12 group-hover:rotate-y-12 group-hover:scale-105"
                        style={{
                          backgroundColor: "#13162D",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <img src="/bg.png" alt="bgimg" />
                      </div>
                      <img
                        src={item.img}
                        alt="cover"
                        className="z-10 absolute bottom-0 transition-transform duration-500 group-hover:rotate-x-12 group-hover:rotate-y-12"
                      />
                    </div>
                  )}

                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {item.des}
                  </p>

                  <div className="flex items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {item.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <img src={icon} alt="icon5" className="p-2" />
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-center items-center">
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Check Live Site
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </div>
                  </div>
                </PinContainer>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
