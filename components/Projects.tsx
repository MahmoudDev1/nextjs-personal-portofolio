"use client";
import projects from "@/data";
import ProjectBox from "./ui/Project";
import { useState } from "react";
import Button from "./ui/Button";
import { HiMiniFolderPlus } from "react-icons/hi2";

interface Project {
  image: string;
  title: string;
  description: string;
  link?: string;
}

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [outputProjects, setOutputProjects] = useState(projects.slice(0, 6));

  function clickHandler() {
    setShowMore(prev => !prev);
    if (showMore) {
      setOutputProjects(projects.slice(0, 6));
    } else {
      setOutputProjects(projects);
    }
  }

  return (
    <div className="projects pt-20" id="projects">
      <h2 className="text-center font-bold text-xl md:text-3xl lg:text-4xl">
        My <span className="text-purple">Recent Projects</span>
      </h2>
      <div className="mt-10 flex flex-wrap justify-between gap-y-6">
        {outputProjects.map((project: Project) => {
          return (
            <ProjectBox
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          );
        })}
        <Button classes="w-fit mx-auto mt-2" click={clickHandler}>
          <HiMiniFolderPlus fontSize={18} className="me-2" />
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </div>
    </div>
  );
}
