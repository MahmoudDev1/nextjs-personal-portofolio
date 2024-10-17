import { useLocale } from "next-intl";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  title: string;
  description: string;
  link?: string;
  ar_title: string;
  ar_description: string;
}

export default function ProjectBox(props: Props) {
  const locale = useLocale();

  return (
    <div className="group border border-white/[0.2] rounded-xl overflow-hidden p-5 w-full md:w-[49%] flex flex-col">
      <div className="relative w-full rounded-xl overflow-hidden bg-[url('/project-bg.png')] bg-cover h-[260px] sm:h-[320px] bg-[#13162d]">
        <Image
          src={`/projects/${props.image}`}
          width={500}
          height={500}
          alt="Project Image"
          className="rounded-xl mx-auto sm:rotate-3 sm:top-[70px] relative transition group-hover:rotate-0 w-[450px] h-[300px] object-cover"
        />
      </div>
      <div className="mt-5 content flex flex-col justify-between flex-1">
        <div>
          <h1 className="mb-2 font-semibold text-lg md:text-2xl">{locale == "en" ? props.title : props.ar_title}</h1>
          <p className="text-gray-500 text-sm md:text-base">{locale == "en" ? props.description : props.ar_description}</p>
        </div>
        {props.link && (
          <a
            target="_blank"
            href={props.link}
            className="flex gap-2 items-center mt-7 w-fit text-purple cursor-pointer ms-auto"
          >
            {locale == "en" ? <span>Live Preview</span> : <span>معاينة الموقع</span>}
            <MdArrowOutward />
          </a>
        )}
      </div>
    </div>
  );
}
