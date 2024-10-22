import Link, { LinkProps } from "next/link";
import {
  FC,
  ReactNode,
} from "react";

import { twClassNames } from "@shared/lib";


  interface ILinkButtonProps extends LinkProps {
      children?: ReactNode;
      className?: string;
  }

export const LinkButton: FC<ILinkButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <Link
    className={ twClassNames(`py-[15px] px-[25px] w-fit h-fit flex text-sm items-center gap-2 justify-center
          border-[1px] border-black rounded-full font-futura-pt font-medium outline-1
          uppercase text-carbon/80 hover:bg-gray-100 transition active:scale-[0.8]
          outline-none align-top`,[className]) }
    { ...props }
  >
    { children }
  </Link>
);
