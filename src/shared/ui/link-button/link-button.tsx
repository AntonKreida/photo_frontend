import Link from "next/link";
import {
  AnchorHTMLAttributes,
  ComponentProps,
  ReactNode,
} from "react";

import { twClassNames } from "@shared/lib";


type TLinkButtonProps = {
    children?: ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
} & ({
    isNextJsLink: true;
} & ComponentProps<typeof Link> | {
    isNextJsLink: false;
} & AnchorHTMLAttributes<HTMLAnchorElement>);


export const LinkButton = ({
  children,
  className,
  type = "button",
  ...props
}: TLinkButtonProps) => (
  props.isNextJsLink
    ? (
      <Link
        className={ twClassNames(`py-[15px] px-[25px] w-fit h-fit flex text-sm items-center gap-2 justify-center
              border-[1px] border-black rounded-full font-futura-pt font-medium outline-1
              uppercase text-carbon/80 hover:bg-gray-100 transition active:scale-[0.8]
              outline-none align-top`, {
          "bg-carbon text-white/80 hover:bg-carbon/90 border-carbon": type === "submit"
        }, [className]) }
        { ...props }
      >
        { children }
      </Link>
    )
    : (
      <a
        className={ twClassNames(`py-[15px] px-[25px] w-fit h-fit flex text-sm items-center gap-2 justify-center
              border-[1px] border-black rounded-full font-futura-pt font-medium outline-1
              uppercase text-carbon/80 hover:bg-gray-100 transition active:scale-[0.8]
              outline-none align-top`, {
          "bg-carbon text-white/80 hover:bg-carbon/90 border-carbon": type === "submit"
        },[className]) }
        { ...props }
      >
        { children }
      </a>
    )
);
