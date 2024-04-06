"use client";
import {
  about_section_description,
  about_section_title,
} from "@/data/aboutsectiondata";
import React from "react";
import HeadingComponent from "../HeadingComponent";
import ParagraphComponent from "../ParagraphComponent";
// import Spline from '@splinetool/react-spline';


export default function AboutSection() {
  return (
    <div className="w-full min-h-[40vh] flex  items-start justify-center">
      <div className="px-9 w-full min-[927px]:w-[60%]  mx-auto relative z-10  md:pt-0">
        <HeadingComponent heading={about_section_title} />

        <ParagraphComponent para={about_section_description} />
      </div>
      <div className="p-4 w-[0%] min-[927px]:w-[40%]  mx-auto relative z-10  md:pt-0 flex flex-col gap-4 ">
      {/* <Spline scene="https://prod.spline.design/nzeKzpavwTK3tQY8/scene.splinecode" /> */}
      </div>
    </div>
  );
}
