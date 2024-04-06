"use client";
import React from "react";


export function ButtonComponent({
  name = "Button",
  className = "",
}: {
  name?: string;
  className?: string;
}) {
  return (
    <>
      <button className={`inline-flex animate-shimmer items-center justify-center border border-slate-800  ${className}`}>
        {name}
      </button>
    </>
  );
}
