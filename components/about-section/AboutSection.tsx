"use client";
import {
  about_section_description,
  about_section_title,
} from "@/data/aboutsectiondata";
import React from "react";
import HeadingComponent from "../HeadingComponent";
import ParagraphComponent from "../ParagraphComponent";
import AnimatedButton from "../buttons/AnimatedButton";
// import Spline from '@splinetool/react-spline';

export default function AboutSection() {
  return (
    <div className="w-full min-h-[40vh] flex  items-start justify-center" id="about-section">
      <div className="px-9 w-full min-[927px]:w-[60%]  mx-auto relative z-10  md:pt-0">
        <HeadingComponent heading={about_section_title} />

        <ParagraphComponent para={about_section_description} />

       

        <div className="w-full mt-4">
          <div className="w-full ">
            <p className="text-secondary dancing-script text-lg">{`<button>`}</p>
          </div>

          <div className="w-full pl-4 sm:pl-10 ">
            <AnimatedButton
              name="Download CV"
              className="border border-primary px-10 py-2 rounded-md text-white text-base hover:text-black hover:bg-white hover:border-none"
            />
          </div>

          <div className="w-full ">
            <p className="text-secondary dancing-script text-lg">{`</button>`}</p>
          </div>
        </div>
      </div>
      <div className="p-4 w-[0%] min-[927px]:w-[40%]  mx-auto relative z-10  md:pt-0 flex flex-col gap-4 ">
        {/* <Spline scene="https://prod.spline.design/nzeKzpavwTK3tQY8/scene.splinecode" /> */}
      </div>
    </div>
  );
}
