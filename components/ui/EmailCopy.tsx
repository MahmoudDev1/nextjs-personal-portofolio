"use client";

import { IoCopyOutline } from "react-icons/io5";
import Button from "./Button";
import { GradientBg } from "./GradientBackground";
import { useState } from "react";
import ReactConfetti from "react-confetti";

export default function EmailCopy() {
  const [emailCopied, setEmailCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("mahmoudfarghly519@gmail.com");
    setEmailCopied(true);
  }

  return (
    <GradientBg>
      {emailCopied && <ReactConfetti recycle={false} />}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className={`font-sans font-bold md:text-xl lg:text-3xl dark:text-neutral-200 mb-2 mt-2`}>
          <div>Do you want to start a project together?</div>
          <Button classes="mt-10 z-10" background="bg-[#161a31]" click={copyEmail}>
            <IoCopyOutline className="me-2" /> {emailCopied ? "Email is Copied!" : "Copy my email address"}
          </Button>
        </div>
      </div>
    </GradientBg>
  );
}
