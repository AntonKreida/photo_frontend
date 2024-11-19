import {
  ButtonHTMLAttributes,
  FC,
  HTMLProps,
  ReactNode,
} from "react";

import { twClassNames } from "@shared/lib";


interface IButtonProps extends HTMLProps<HTMLButtonElement> {
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    children?: ReactNode;
    className?: string;
}

export const Button: FC<IButtonProps> = ({
  type = "button",
  children,
  className,
  ...props
}) => (
  <button
    className={ twClassNames(`py-[15px] px-[25px] w-fit h-fit flex text-sm items-center gap-2 justify-center
        border-[1px] border-carbon rounded-full font-futura-pt font-medium outline-1
        uppercase text-carbon/80 hover:bg-gray-100 transition active:scale-[0.9]
        outline-none align-top disabled:active:scale-100 disabled:cursor-not-allowed disabled:hover:bg-carbon/50
        disabled:bg-carbon/50 disabled:border-carbon/50`, {
      "bg-carbon text-white/80 hover:bg-carbon/90 border-carbon": type === "submit"
    },[className]) }
    type={ type }
    { ...props }
  >
    { children }
  </button>
);
