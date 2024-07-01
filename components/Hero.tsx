import Button from "./ui/Button";
import { FlipWords } from "./ui/FlipWords";
import { Navbar } from "./ui/Navbar";
import { Spotlight } from "./ui/SpotLight";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Hero() {
  const navbarItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
  return (
    <>
      <Navbar navItems={navbarItems} />
      <div className="h-screen w-full -z-10 bg-black-100 bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <Spotlight className="z-10 top-0 lg:h-[90vh]" fill="blue" />
      <Spotlight className="z-10 h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <div className="relative content z-20 mt-56 text-center mx-auto md:max-w-2xl lg:max-w-4xl text-white">
        <div className="uppercase tracking-widest text-xs text-center text-blue-100">
          I Create Websites That Are{" "}
          <FlipWords
            words={["Responsive", "Beautiful", "Intuitive", "Dynamic"]}
            duration={3000}
            className="text-blue-100"
          />
        </div>
        <h1 className="mt-3 dark:text-white text-black text-[40px] md:text-5xl lg:text-6xl leading-snug tracking-wide font-bold">
          Transforming Concepts into Seamless <span className="text-purple">User Experiences</span>
        </h1>
        <TextGenerateEffect
          words="Hello i'm Mahmoud, a Next.js Frontend Developer."
          className="mt-6 tracking-widest text-sm md:text-lg lg:text-xl"
        />
        <Button classes="mt-10" href="#projects" anchor>
          <span className="me-2">Show my work</span>
          <RiSendPlaneFill fontSize={16} />
        </Button>
      </div>
    </>
  );
}
