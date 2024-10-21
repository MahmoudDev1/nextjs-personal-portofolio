"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function StepsBox() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0);
  const t = useTranslations("Steps");
  const content = [
    {
      title: t("step1.title"),
      description: t("step1.description"),
      image: "steps/consultant.webp",
      buttonText: t("next-btn"),
    },
    {
      title: t("step2.title"),
      description: t("step2.description"),
      image: "steps/development.webp",
      buttonText: t("next-btn"),
    },
    {
      title: t("step3.title"),
      description: t("step3.description"),
      image: "steps/review.webp",
      buttonText: t("prev-btn"),
    },
  ];

  useEffect(() => {
    if (containerRef.current) {
      const scrollToItem = document.getElementById(`step-${step}`);
      if (scrollToItem) {
        const itemRect = scrollToItem.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const scrollPosition = itemRect.top - containerRect.top + containerRef.current.scrollTop;
        containerRef.current.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [step]);

  function handleBtnClick() {
    setStep(prev => {
      return prev == 2 ? 0 : prev + 1
    })
  }

  return (
    <div className="w-full h-72 sm:h-80 bg-blue-900 rounded-md px-10 overflow-y-hidden" ref={containerRef}>
      {content.map((item, index) => {
        return (
          <div key={index} className="mx-auto max-w-[44rem] h-full py-8 flex gap-5 md:gap-10 relative" id={`step-${index}`}>
            <div className="flex-1">
              <h1 className="text-lg md:text-2xl font-bold text-slate-100 h-[45px]">{item.title}</h1>
              <p className="text-gray-300 text-sm md:text-base">{item.description}</p>
              <button className="absolute bottom-10 border-2 border-purple text-purple rounded px-3 py-1 transition hover:scale-105 focus:scale-100" onClick={handleBtnClick}>{item.buttonText}</button>
            </div>
            <img src={item.image} alt="Step Image" className="hidden sm:block w-40 h-40 md:w-60 md:h-60 self-center" />
          </div>
        );
      })}
    </div>
  );
}
