"use client";
import projects from "@/data";
import ProjectBox from "./ui/Project";
import { useState } from "react";
import Button from "./ui/Button";
import { HiMiniFolderPlus } from "react-icons/hi2";
import { useLocale } from "next-intl";

interface Project {
  image: string;
  title: string;
  description: string;
  link?: string;
  ar_title: string;
  ar_description: string;
}

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [outputProjects, setOutputProjects] = useState(projects.slice(0, 6));
  const locale = useLocale();

  function clickHandler() {
    setShowMore((prev) => !prev);
    if (showMore) {
      setOutputProjects(projects.slice(0, 6));
    } else {
      setOutputProjects(projects);
    }
  }

  return (
    <div className="projects pt-20" id="projects">
      {locale == "en" ? (
        <h2 className="text-center font-bold text-xl md:text-3xl lg:text-4xl">
          My <span className="text-purple">Recent Projects</span>
        </h2>
      ) : (
        <h2 className="text-center font-bold text-xl md:text-3xl lg:text-4xl">
          أحدث <span className="text-purple">مشاريعي</span>
        </h2>
      )}
      <div className="mt-10 flex flex-wrap justify-between gap-y-6">
        {outputProjects.map((project: Project) => {
          return (
            <ProjectBox
              key={project.title}
              title={project.title}
              description={project.description}
              ar_title={project.ar_title}
              ar_description={project.ar_description}
              image={project.image}
              link={project.link}
            />
          );
        })}
        <Button classes="w-fit mx-auto mt-2" click={clickHandler}>
          <HiMiniFolderPlus fontSize={18} className="me-2" />
          {
            locale == "en" ? 
            (showMore ? "Show Less" : "Show More") :
            (showMore ? "عرض أقل" : "عرض المزيد")
          }
        </Button>
      </div>
    </div>
  );
}
