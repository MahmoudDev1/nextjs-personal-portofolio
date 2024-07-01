import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export default function About() {
  return (
    <div className="about pt-64" id="about">
      <BentoGrid>
        <BentoGridItem
          id={1}
          title="I prioritize collaboration and clear communication to build great web solutions."
          className="row-span-2 col-span-3 justify-end"
        />
        <BentoGridItem
          id={2}
          title="My tech stack"
          className="md:col-span-2 col-span-3 text-center"
          description="MODERN TOOLS & TECHNOLOGIES"
        />
        <BentoGridItem id={3} title="Do you want to start a project together?" />
      </BentoGrid>
    </div>
  );
}
