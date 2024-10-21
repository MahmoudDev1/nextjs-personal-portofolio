import { useLocale } from "next-intl";
import StepsBox from "./ui/StepsBox";

export default function Steps() {
  const locale = useLocale();

  return (
    <div className="steps pt-20" id="steps">
      {locale == "en" ? (
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
          Our <span className="text-purple">Work Process</span>
        </h1>
      ) : (
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl">
          طبيعة <span className="text-purple">العمل بيننا</span>
        </h1>
      )}
      <div className="mt-10">
        <StepsBox />
      </div>
    </div>
  );
}
