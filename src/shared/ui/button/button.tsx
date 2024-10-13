import { FC, HTMLProps, ReactNode } from "react";

import { twClassNames } from "@shared/lib";


interface IButtonProps extends HTMLProps<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
    children?: ReactNode;
    className?: string;
}

export const Button: FC<IButtonProps> = ({ type = "button", children, className, ...props }) => (
  <button
    className={ twClassNames(`py-[15px] px-[25px] w-fit h-fit flex text-sm items-center gap-2 justify-center
        border-[1px] border-black rounded-full font-futura-pt font-medium outline-1
        uppercase text-carbon/80 hover:bg-gray-100 transition active:scale-[0.8]
        outline-none align-top`, {
      "bg-carbon text-white/80 hover:bg-carbon/90 border-carbon": type === "submit"
    },[className]) }
    type={ type }
    { ...props }
  >
    { children }
  </button>
);
