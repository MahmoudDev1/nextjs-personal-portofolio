"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import step1Image from "@/public/step1.png";
import step2Image from "@/public/step2.png";
import step3Image from "@/public/step3.png";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";
import { useLocale } from "next-intl";

export const ScrollReveal = ({ contentClassName }: { contentClassName?: string }) => {
  const locale = useLocale();

  const content = [
    {
      title: locale === "ar" ? "الاستشارة الأولية" : "Initial Consultation",
      description:
        locale === "ar"
          ? "نبدأ بمناقشة شاملة لفهم أهدافك ومتطلباتك ورؤيتك للمشروع. تضمن هذه الخطوة أننا متفقون ويمكننا إنشاء خريطة طريق للنجاح."
          : "We start with a comprehensive discussion to understand your goals, requirements, and vision for the project. This step ensures that we are aligned and can create a roadmap for success.",
      content: (
        <div className="h-full w-full p-3">
          <Image src={step1Image} className="h-full w-full" alt="linear board demo" />
        </div>
      ),
      button: (
        <button
          onClick={() => setStep(1)}
          className="mt-5 flex gap-2 items-center border-2 font-bold p-3 rounded-lg border-purple text-purple"
        >
          <FaAngleDown fontSize={19} />
          {locale === "ar" ? "الخطوة التالية" : "Next Step"}
        </button>
      ),
    },
    {
      title: locale === "ar" ? "التصميم والتطوير" : "Design and Development",
      description:
        locale === "ar"
          ? "خلال هذه المرحلة، نقوم بإنشاء نماذج أولية، ثم نقوم بتطوير الموقع الإلكتروني. طوال هذه الفترة، نحافظ على التواصل المفتوح، ونقدم تحديثات منتظمة، ونبحث عن ملاحظاتك للحفاظ على مسار المشروع."
          : "During this phase, we create wireframes and prototypes, then develop the website. Throughout, we maintain open communication, provide regular updates, and seek your feedback to keep the project on track.",
      content: (
        <div className="h-full w-full p-3">
          <Image src={step2Image} className="h-full w-full" alt="linear board demo" />
        </div>
      ),
      button: (
        <button
          onClick={() => setStep(2)}
          className="mt-5 flex gap-2 items-center border-2 font-bold p-3 rounded-lg border-purple text-purple"
        >
          <FaAngleDown fontSize={19} />
          {locale === "ar" ? "الخطوة التالية" : "Next Step"}
        </button>
      ),
    },
    {
      title: locale === "ar" ? "المراجعة والإطلاق" : "Review and Launch",
      description:
        locale === "ar"
          ? "في الخطوة النهائية، نقوم بإجراء اختبار شامل وإجراء التعديلات اللازمة بناءً على ملاحظاتك. بمجرد الموافقة على كل شيء، نطلق موقعك على الويب، مما يضمن نجاح المشروع."
          : "In the final step, we conduct thorough testing and make any necessary adjustments based on your feedback. Once everything is approved, we launch your website, ensuring a smooth and successful deployment.",
      content: (
        <div className="h-full w-full p-3">
          <Image src={step3Image} className="h-full w-full" alt="linear board demo" />
        </div>
      ),
      button: (
        <button
          onClick={() => setStep(0)}
          className="mt-5 flex gap-2 items-center border-2 font-bold p-3 rounded-lg border-purple text-purple"
        >
          <FaAngleUp fontSize={19} />
          {locale === "ar" ? "العودة" : "Go Back"}
        </button>
      ),
    },
  ];
  const [step, setStep] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (boxRef.current) {
      if (step == 0) {
        boxRef.current.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      } else if (step == 1) {
        boxRef.current.scrollTo({
          top: 323,
          left: 0,
          behavior: "smooth",
        });
      } else {
        boxRef.current.scrollTo({
          top: 650,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  }, [boxRef, step]);

  const backgroundColors = ["var(--blue-900)", "var(--slate-800)", "var(--neutral-900)"];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[step],
      }}
      ref={boxRef}
      className="h-[20rem] flex flex-col gap-6 overflow-y-auto relative rounded-md px-10 scrollbar-hide pt-3"
    >
      {content.map((item, index) => (
        <div className="flex h-[20rem] gap-16 justify-center" key={item.title + index}>
          <div className="relative flex items-center px-4">
            <div className="max-w-2xl pt-5">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: step === index ? 1 : 0.3,
                }}
                className="text-lg md:text-2xl font-bold text-slate-100 h-[45px]"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: step === index ? 1 : 0.3,
                }}
                className="text-sm md:text-base text-gray-300 max-w-sm mt-5 h-[135px]"
              >
                {item.description}
              </motion.p>
              {item.button}
            </div>
          </div>
          <div className={cn("hidden lg:block rounded-md w-[300px] h-[300px] overflow-hidden", contentClassName)}>
            {item.content}
          </div>
        </div>
      ))}
      <div className="h-10"></div>
    </motion.div>
  );
};
