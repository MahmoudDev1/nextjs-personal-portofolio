import { cn } from "@/utils/cn";
import Button from "./Button";
import { IoCopyOutline } from "react-icons/io5";
import { GradientBg } from "./GradientBackground";
import { MovingTechsBoxes } from "./TechsBoxes";

import {
  RiBootstrapFill,
  RiCss3Fill,
  RiGithubFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiNextjsFill,
  RiNpmjsLine,
  RiReactjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { useState } from "react";
import EmailCopy from "./EmailCopy";
import { SiTypescript } from "react-icons/si";

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn("grid md:auto-rows-[14rem] md:grid-cols-5 gap-4 max-w-7xl mx-auto ", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  className,
  title,
  description,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
}) => {
  const techs = [
    {
      name: "HTML",
      icon: <RiHtml5Fill color="#e34f26" />,
    },
    {
      name: "CSS",
      icon: <RiCss3Fill color="#002561" />,
    },
    {
      name: "JavaScript",
      icon: <RiJavascriptFill color="#f7df1e" />,
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill color="#0ea5e9" />,
    },
    {
      name: "NPM",
      icon: <RiNpmjsLine color="#cb3837" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript color="#3178c6" />,
    },
  ];

  const techs2 = [
    {
      name: "ReactJS",
      icon: <RiReactjsFill color="#00d8ff" />,
    },
    {
      name: "NextJS",
      icon: <RiNextjsFill color="#26313b" />,
    },
    {
      name: "Bootstrap",
      icon: <RiBootstrapFill color="#712cf9" />,
    },
    {
      name: "Github",
      icon: <RiGithubFill color="#fff" />,
    },
  ];

  return id == 3 ? (
    <EmailCopy />
  ) : (
    <div
      className={cn(
        "bg-[#04071d] overflow-hidden bg-no-repeat row-span-1 relative rounded-xl hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-8 dark:border-white/[0.1] border border-transparent justify-between flex flex-col space-y-4 bg-cover",
        className,
        id == 1 ? "bg-[url('/bg.svg')] group/bento pt-28 md:pt-0" : ""
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="text-gray-400 text-xs lg:text-sm tracking-wide -mb-1">{description}</div>
        <div
          className={`font-sans font-bold md:text-xl lg:text-3xl dark:text-neutral-200 mb-2 mt-2 ${
            id == 1 ? "max-w-md" : ""
          }`}
        >
          {title}
          {id == 2 && (
            <>
              <MovingTechsBoxes items={techs} pauseOnHover={false} className="my-4" />
              <MovingTechsBoxes items={techs2} pauseOnHover={false} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
