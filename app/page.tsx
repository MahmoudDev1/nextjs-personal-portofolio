import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-10">
      <Hero />
      <About />
      <Projects />
      <Steps />
      <Footer />
    </div>
  );
}
