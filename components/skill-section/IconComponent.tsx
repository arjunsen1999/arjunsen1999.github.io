import Image from "next/image";
import React from "react";

export default function IconComponent({
  icon = "",
  name,
  width,
  height,
}: {
  icon: string;
  name: string;
  width?: number;
  height?: number;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="w-[60px] h-[60px] flex items-center justify-center">
        <Image
          src={`/icons/${icon}.svg`}
          width={width ? width : 50}
          height={height ? height : 50}
          alt={name}
        />
      </div>
      <p className="text-md   font-bold  bg-clip-text  bg-gradient-to-b text-[#54595A] bg-opacity-50 ">
        {name}
      </p>
    </div>
  );
}
