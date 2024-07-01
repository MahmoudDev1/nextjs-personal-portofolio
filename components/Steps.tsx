import { ScrollReveal } from "./ui/ScrollReveal";

export default function Steps() {
  return (
    <div className="steps pt-20" id="steps">
      <h1 className="text-center font-bold text-xl md:text-3xl lg:text-4xl">
        Our <span className="text-purple">Work Process</span>
      </h1>
      <div className="mt-10">
        <ScrollReveal />
      </div>
    </div>
  );
}
