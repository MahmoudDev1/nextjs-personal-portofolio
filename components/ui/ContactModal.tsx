"use client";

import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Button from "./Button";
import { FaCheck, FaUser } from "react-icons/fa";
import { FaEnvelope, FaMessage, FaXmark } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { sendMail } from "@/utils/mail";
import { useFormState, useFormStatus } from "react-dom";
import ReactConfetti from "react-confetti";
import { useLocale, useTranslations } from "next-intl";
import { CgSpinnerAlt } from "react-icons/cg";

function FormButton() {
  const t = useTranslations("Modal");
  const { pending } = useFormStatus();
  return (
    <Button classes="w-fit" disabled={pending}>
      {pending ? <CgSpinnerAlt fontSize={18} className="me-2 animate-spin" /> : <RiSendPlaneFill fontSize={18} className="me-2" />}
      {t("button")}
    </Button>
  );
}

export default function ContactModal() {
  const locale = useLocale();
  const t = useTranslations("Modal");
  const searchParams = useSearchParams();
  const modal = searchParams.get("openModal");
  const router = useRouter();
  const [state, formAction] = useFormState(sendMail, null);
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key == "Escape") {
        closeModal();
      }
    });
  }, []);

  useEffect(() => {
    if (state?.success) {
      form.current?.reset();
    }
  }, [state?.success]);

  function closeModal() {
    router.push("/", { scroll: false });
  }

  return (
    <AnimatePresence>
      {modal && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="overlay fixed w-full h-full top-0 left-0 bg-black/[0.5] backdrop-blur-[2px] z-40"
            onClick={closeModal}
          ></motion.div>
          <motion.div
            dir={locale == "en" ? "ltr" : "rtl"}
            initial={{ opacity: 0, y: "-70%", x: "-50%" }}
            animate={{ opacity: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, y: "-70%", x: "-50%" }}
            transition={{ bounce: false }}
            className="fixed top-[50%] left-[50%] z-50 bg-black-100 w-full sm:w-[500px] p-5 rounded-md border-2 border-white/[0.1]"
          >
            {state?.success && <ReactConfetti recycle={false} width={500} height={416} />}
            <h1 className="font-bold text-lg md:text-xl tracking-wide">{t("title")}</h1>
            <form className="mt-5" action={formAction} ref={form}>
              <div className="relative mb-4">
                <FaUser className="text-gray-400 absolute top-[50%] translate-y-[-50%] left-2 rtl:right-2 rtl:left-auto" />
                <input
                  type="text"
                  placeholder={t("input1")}
                  className="w-full py-2 ps-8 pe-3 rounded-md bg-transparent border border-white/[0.2] focus:outline-none placeholder:text-gray-400"
                  name="name"
                  required
                  minLength={5}
                />
              </div>
              <div className="relative mb-4">
                <FaEnvelope className="text-gray-400 absolute top-[50%] translate-y-[-50%] left-2 rtl:right-2 rtl:left-auto" />
                <input
                  dir="ltr"
                  type="email"
                  placeholder={t("input2")}
                  className="rtl:text-right w-full py-2 rtl:pe-8 rtl:ps-3 ps-8 pe-3 rounded-md bg-transparent border border-white/[0.2] focus:outline-none placeholder:text-gray-400"
                  name="email"
                  required
                />
              </div>
              <div className="relative mb-4">
                <FaMessage className="text-gray-400 absolute top-3 left-2 rtl:right-2 rtl:left-auto" />
                <textarea
                  rows={5}
                  placeholder={t("input3")}
                  className="w-full py-2 ps-8 pe-3 rounded-md bg-transparent border border-white/[0.2] focus:outline-none resize-none placeholder:text-gray-400"
                  name="message"
                  required
                  minLength={20}
                ></textarea>
              </div>

              <div className="flex items-end justify-between gap-5 flex-wrap">
                <FormButton />
                {state?.success && (
                  <p className="text-green-600 pb-0 flex gap-2 items-center font-bold">
                    <FaCheck />
                    {locale == "en" ? "Message successfully sent." : "تم إرسال الرسالة."}
                  </p>
                )}
                {state?.error && (
                  <p className="text-red-600 pb-0 flex gap-2 items-center font-bold">
                    <FaXmark />
                    {locale == "en" ? "An error occured." : "حدث خطأ."}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
