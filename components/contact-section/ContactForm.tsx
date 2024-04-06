"use client"
import React from "react";
import {motion} from "framer-motion"

export default function ContactForm() {
  return (
    <div className="">
      <form action="" className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Name Surname"
            required
            className="w-full py-3 px-4  bg-white rounded-lg"
          />
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            className="w-full py-3 px-4  bg-white rounded-lg"
          />
        </div>
        <div className="">
          <textarea
            className="w-full py-2 px-4  bg-white rounded-lg h-[200px]"
            placeholder="Enter a description"
          ></textarea>
        </div>
        <div className="">
            <motion.button whileTap={{scale : 0.9}} className="bg-white py-3 px-10 w-[200px] rounded-full font-bold">Send</motion.button>
        </div>
      </form>
    </div>
  );
}
