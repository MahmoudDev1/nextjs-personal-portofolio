import { useLocale, useTranslations } from "next-intl";
import Button from "./ui/Button";
import { FlipWords } from "./ui/FlipWords";
import { Navbar } from "./ui/Navbar";
import { Spotlight } from "./ui/SpotLight";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Hero() {
  const t = useTranslations("Landing");
  const navbar = useTranslations("Navbar")
  const locale = useLocale();

  const navbarItems = [
    {
      name: navbar('nav1'),
      link: "#",
    },
    {
      name: navbar('nav2'),
      link: "#about",
    },
    {
      name: navbar('nav3'),
      link: "#projects",
    },
    {
      name: navbar('nav4'),
      link: "#contact",
    },
  ];
  return (
    <>
      <Navbar navItems={navbarItems} />
      <div className="h-screen w-full -z-10 bg-black-100 bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <Spotlight className="hidden md:block z-10 top-0 lg:h-[90vh]" fill="blue" />
      <Spotlight className="hidden md:block z-10 h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <div className="relative content z-20 mt-56 text-center mx-auto md:max-w-2xl lg:max-w-4xl text-white">
        {locale == "en" ? (
          <div className="uppercase tracking-widest text-[10px] md:text-xs text-center text-blue-100">
            I Create Websites That Are{" "}
            <FlipWords
              words={["Responsive", "Beautiful", "Intuitive", "Dynamic"]}
              duration={1500}
              className="text-blue-100"
            />
          </div>
        ) : (
          <div className="uppercase tracking-widest text-[10px] md:text-xs text-center text-blue-100">
            أصنع مواقع ويب بحيث تكون جميلة و متجاوبة
          </div>
        )}
        {locale == "en" ? (
          <h1 className="mt-3 dark:text-white text-black text-[40px] md:text-5xl lg:text-6xl leading-snug tracking-wide font-bold">
            Transforming Concepts into Seamless <span className="text-purple">User Experiences</span>
          </h1>
        ) : (
          <h1 className="mt-3 dark:text-white text-black text-[40px] md:text-5xl lg:text-6xl leading-snug tracking-wide font-bold">
            تحويل الأفكار إلى تجارب مستخدم <span className="text-purple">سلسة ومميزة</span>
          </h1>
        )}
        <TextGenerateEffect
          words={t("info")}
          className='mt-6 text-sm md:text-lg lg:text-xl tracking-widest rtl:tracking-normal'
        />
        <Button classes="mt-10" href="#projects" anchor>
          <span className="me-2">{t("button")}</span>
          <RiSendPlaneFill fontSize={16} />
        </Button>
      </div>
    </>
  );
}
