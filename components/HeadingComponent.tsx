"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeadingComponent({ heading }: { heading: string }) {
  return (
    <div className="w-full">
      <div className="w-full ">
        <p className="text-secondary dancing-script text-lg">{`<h1>`}</p>
      </div>

      <div className="w-full pl-4 sm:pl-10 flex flex-col gap-2 ">
        <h1 className="text-2xl sm:text-3xl md:text-5xl text-primary font-bold ">
          {heading?.split("").map((char: string, idx : number) => {
            return (
              <motion.span
                key={idx}
                whileHover={{ fontSize: "65px", color: "white" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="cursor-default"
              >
                {char}
              </motion.span>
            );
          })}
        </h1>
      </div>

      <div className="w-full ">
        <p className="text-secondary dancing-script text-lg">{`</h1>`}</p>
      </div>
    </div>
  );
}
