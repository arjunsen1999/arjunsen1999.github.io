"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import TagButton from "../buttons/TagButton";
import { ButtonComponent } from "../buttons/ButtonComponent";

export function ProjectCard({
  id,
  name,
  desc,
  imageUrl,
  tech_stack,
  githubLink,
  liveLink,
}: {
  id: number;
  name: string;
  desc: string;
  imageUrl: string;
  tech_stack: string[];
  githubLink: string;
  liveLink: string;
}) {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[100%]">
        <CardContainer className="m-0 p-0 w-full">
          <CardBody className="bg-[#020E0F] relative group/card  hover:shadow-2xl hover:shadow-cyan-400/[0.1] hover:border-cyan-400 border-white/[0.2]  w-full h-auto rounded-xl p-6 border grid grid-cols-2 gap-4">
            <div className=" h-full flex flex-col justify-between col-span-2 order-2 lg:order-1 lg:col-span-1">
              <div>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white"
                >
                  {name}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-sm max-w-sm mt-2 text-neutral-300"
                >
                  {desc}
                </CardItem>

                <CardItem
                  translateZ="20"
                  className="w-full mt-4 flex items-start gap-4 flex-wrap"
                >
                  {tech_stack?.map((ele, idx) => {
                    return (
                      <ButtonComponent
                        key={idx}
                        name={ele}
                        className="bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-10 py-0 rounded-full"
                      />
                    );
                  })}
                </CardItem>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={liveLink}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white w-full"
                >
                
                  <ButtonComponent
                    name="Try Live →"
                    className="px-6 font-medium w-full sm:w-[200px] py-2 rounded-full hover:text-black hover:bg-white text-lg"
                  />
                </CardItem>
                {githubLink && (
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={githubLink}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal text-white w-full"
                  >
                  
                    <ButtonComponent
                      name="GitHub"
                      className=" px-6 font-medium w-full sm:w-[200px] py-2 rounded-full hover:text-black hover:bg-white text-lg"
                    />
                  </CardItem>
                )}
              </div>
            </div>

            <div className=" rounded-xl p-2 sm:p-10 bg-[#030C0D] col-span-2 order-1 lg:order-2 lg:col-span-1">
              <CardItem translateZ="100" className="w-full mt-0 sm:mt-4">
                <Image
                  src={`${imageUrl}`}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={name}
                />
              </CardItem>
            </div>

          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
