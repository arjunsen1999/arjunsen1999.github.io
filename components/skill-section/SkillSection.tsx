"use client";
import { skill_section_heading, skills } from "@/data/skills.data";
import React from "react";
import SkillCard from "./SkillCard";
import HeadingComponent from "../HeadingComponent";

export default function SkillSection() {
  return (
    <div className="w-full px-8">
      <div className="w-full mb-14">
        <HeadingComponent heading={skill_section_heading} />
      </div>
      <div className="w-full flex flex-col gap-8">
        {skills?.map((ele) => {
          return (
            <SkillCard key={ele?.id} name={ele.name} skills={ele.skills} />
          );
        })}
      </div>
    </div>
  );
}
