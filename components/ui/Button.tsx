import { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  children: ReactNode;
  classes?: string;
  href?: string;
  background?: string;
  click?: () => void;
  anchor?: boolean;
  download?: boolean;
  disabled?: boolean
};

export default function Button({ children, classes = "", href, background = "bg-slate-950", click, anchor, download, disabled }: ButtonProps) {

  const isLink = !!href;
  const commonClasses =
    "relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none w-52 disabled:opacity-55 disabled:cursor-default " + classes;

  if (isLink && !anchor) {
    return (
      <Link href={href} className={commonClasses} scroll={false}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex h-full w-full items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-white z-10 ${background}`}
        >
          {children}
        </span>
      </Link>
    );
  } else {
    const Component = anchor ? "a" : "button"
    return (
      <Component className={commonClasses} onClick={click} href={href} disabled={disabled} download={download}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span
          className={`inline-flex h-full w-full items-center justify-center rounded-md px-3 py-1 text-sm font-medium text-white z-10 ${background}`}
        >
          {children}
        </span>
      </Component>
    );
  }
}
