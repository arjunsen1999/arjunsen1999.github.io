import React from "react";
import HeadingComponent from "../HeadingComponent";
import { project, project_section_heading } from "@/data/project.data";
import { ProjectCard } from "./ProjectCard";

export default function ProjectSection() {
  return (
    <div className="w-full px-8">
      <div className="w-full mb-14">
        <HeadingComponent heading={project_section_heading} />
      </div>
      <div className="w-full flex flex-col gap-10">
        {project?.map((project) => {
          return <ProjectCard key={project?.id} {...project} />;
        })}
      </div>
    </div>
  );
}
