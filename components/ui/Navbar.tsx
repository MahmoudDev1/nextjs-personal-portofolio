"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/utils/cn";
import { MdLanguage } from "react-icons/md";
import { useLocale } from "next-intl";
import { cookies } from "next/headers";
import { changeLang } from "@/actions";

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const locale = useLocale()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
      setShowDropdown(false)
    }
  });

  useEffect(() => {
    // Function to close dropdown when clicking outside
    function handleClickOutside(event: any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  async function changeLangHandler(lang: string) {
    setShowDropdown(false)
    if(lang != locale) {
      changeLang(lang, locale)
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex backdrop-blur-sm bg-black-100/[0.3] max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-30 px-9 py-5 items-center justify-center gap-3 sm:gap-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="text-sm">{navItem.name}</span>
          </a>
        ))}
        <div className="relative select-none" ref={dropdownRef}>
          <MdLanguage fontSize={18} className="cursor-pointer" onClick={() => setShowDropdown(prev => !prev)} />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, visibility: "hidden" }}
            animate={{
              opacity: showDropdown ? 1 : 0,
              scale: showDropdown ? 1 : 0.9,
              visibility: showDropdown ? "visible" : "hidden",
            }}
            transition={{ duration: 0.125 }}
            className={`options absolute top-7 ltr:right-0 ltr:sm:right-auto rtl:left-0 rtl:sm:left-auto border border-white/[0.2] bg-black-100 rounded-md w-32`}
          >
            <div className="cursor-pointer px-3 py-2 transition hover:bg-gray-800" onClick={() => changeLangHandler("ar")}>
              {
                locale == "en" ? "Arabic" : "عربي"
              }
            </div>
            <div className="cursor-pointer px-3 py-2 transition hover:bg-gray-800" onClick={() => changeLangHandler("en")}>
              {
                locale == "en" ? "English" : "إنجليزي"
              }
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
