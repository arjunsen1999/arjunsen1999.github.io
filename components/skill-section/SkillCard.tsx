import React from "react";
import IconComponent from "./IconComponent";

export default function SkillCard({
  name,
  skills = [],
}: {
  name?: string;
  skills: any;
}) {
  return (
    <div className="w-full border  overflow-hidden py-8 px-8 min-h-[300px] border-white/[0.2] skill-gradient  relative rounded-xl  hover:border-cyan-400  animate-shimmer transition-colors hover:shadow-2xl hover:shadow-cyan-400/[0.1]">
      <div className="w-full">
        <h1 className="text-lg sm:text-2xl  font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-16">
          {name}
        </h1>

        <div className="w-full  flex items-center justify-center flex-wrap gap-14">
          {skills?.map((ele: any) => {
            return (
              <IconComponent
                key={ele.id}
                icon={ele.skillIcon}
                name={ele.skillName}
                width={ele.width}
                height={ele.height}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
