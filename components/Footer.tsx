import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Button from "./ui/Button";
import { SiMinutemailer } from "react-icons/si";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("Footer");

  return (
    <div id="contact" className="pt-28 text-center relative h-[450px]">
      <div className="h-full w-full -z-10 bg-black-100 bg-grid-lg-white/[0.04] absolute top-0 left-0 flex items-center justify-center">
        <div className="z-10 absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
      </div>
      {locale == "en" ? (
        <h2 className="text-center font-bold text-2xl md:text-4xl mb-5">
          Ready to bring <span className="text-purple">your vision</span> to life?
        </h2>
      ) : (
        <h2 className="text-center font-bold text-2xl md:text-4xl mb-5">
          هل انت على استعداد <span className="text-purple">لتحقيق رؤيتك ؟</span>
        </h2>
      )}
      <p className="text-gray-400 text-xs sm:text-sm md:text-base ">{t('smallText')}</p>
      <Button classes="mt-10 sm:w-52" href="?openModal=true">
        {t('button')} <SiMinutemailer className="ms-2" fontSize={17} />
      </Button>
      <footer className="flex justify-between absolute bottom-0 py-6 w-full items-center flex-wrap gap-5">
        <span>{t("text")}</span>
        <div className="socials flex gap-2 *:p-2 *:rounded-md *:border *:border-white/[0.2] *:text-[19px] *:bg-[#101226]">
          <a href="https://wa.me/+201020069196" target="_blank">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/MahmoudDev1" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mahmoud-farghly-97668b261/" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}
