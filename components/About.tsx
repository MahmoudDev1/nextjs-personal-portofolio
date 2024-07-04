import { useTranslations } from "next-intl";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="about pt-64" id="about">
      <BentoGrid>
        <BentoGridItem
          id={1}
          title={t('box1')}
          className="row-span-2 col-span-3 justify-end"
        />
        <BentoGridItem
          id={2}
          title={t('box2.title')}
          className="md:col-span-2 col-span-3 text-center"
          description={t('box2.text')}
        />
        <BentoGridItem id={3} title={t('box3.title')} />
      </BentoGrid>
    </div>
  );
}
