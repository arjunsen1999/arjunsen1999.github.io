"use client"
import GridDotBackground from "@/components/backgrounds/GridDotBackground";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full">
        <GridDotBackground />
        {children}
      </div>
    </>
  );
}
