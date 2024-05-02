"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { description, designation, greeting, name } from "@/data/homepagedata";
import AnimatedButton from "../buttons/AnimatedButton";
// import Spline from '@splinetool/react-spline';


export default function HomeSection() {
  return (
    <div className="w-full min-h-[40vh] flex  items-start justify-center ">
      <div className="py-4 p-2 sm:p-4 w-[100%] min-[927px]:w-[60%]   mx-auto relative z-10  md:pt-0 flex flex-col gap-4 ">
        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
        <div className="w-full">
          <p className="text-secondary dancing-script text-lg">{`<html>`}</p>
        </div>
        <div className="w-full pl-4">
          <p className="text-secondary dancing-script text-lg">{`<body>`}</p>
        </div>

        <div className="w-full pl-8">
          <p className="text-secondary dancing-script text-lg">{`<h1>`}</p>
        </div>

        <div className="w-full pl-10 flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold">
            {greeting?.split("").map((char: string, idx: number) => {
              return (
                <motion.span
                  key={idx}
                  whileHover={{ fontSize: "65px", color: "cyan" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="cursor-default bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
                >
                  {char}
                </motion.span>
              );
            })}
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold">
            {name?.split("").map((char: string, idx: number) => {
              return (
                <motion.span
                  key={idx}
                  whileHover={{ fontSize: "65px", color: "cyan" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="cursor-default bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
                >
                  {char}
                </motion.span>
              );
            })}
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 font-bold">
            {designation?.split("").map((char: string, idx: number) => {
              return (
                <motion.span
                  key={idx}
                  whileHover={{ fontSize: "65px", color: "cyan" }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="cursor-default"
                >
                  {char}
                </motion.span>
              );
            })}
          </h1>
        </div>

        <div className="w-full pl-8">
          <p className="text-secondary dancing-script text-lg">{`</h1>`}</p>
        </div>

        <div className="w-full pl-8">
          <p className="text-secondary dancing-script text-lg">{`<p>`}</p>
        </div>

        <div className="w-full pl-10 ">
          <p className="text-white text-sm sm:text-lg">{description}</p>
        </div>

        <div className="w-full pl-8">
          <p className="text-secondary dancing-script text-lg">{`</p>`}</p>
        </div>


        {/* ///////////////////////////////////////////////////////////////////////////////////// */}
      </div>
      <div className="p-4 w-[0%] min-[927px]:w-[40%]  mx-auto relative z-10  pt-20 md:pt-0">
        <div className="w-full h-full flex justify-center items-center ">
        
          {/* <Spline scene="https://prod.spline.design/dVMxemPSNj45eQIv/scene.splinecode" /> */}
        </div>
      </div>
    </div>
  );
}
