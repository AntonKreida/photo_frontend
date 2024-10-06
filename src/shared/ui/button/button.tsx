import { FC, HTMLProps, ReactNode } from "react";
import { twClassNames } from "@shared/lib";


interface IButtonProps extends HTMLProps<HTMLButtonElement> {
    type?: "button" | "submit" | "reset";
    children?: ReactNode;
}

export const Button: FC<IButtonProps> = ({ type = "button", children, ...props }) => (
  <button
    className={twClassNames(`py-4 p-6 flex items-center gap-2 justify-center
        border-2 border-black rounded-full font-futura-pt font-medium
        uppercase text-carbon/80 hover:bg-gray-100 transition active:scale-[0.8]`, {
            "bg-carbon text-white/80 hover:bg-carbon/90 border-carbon": type === "submit"
        })}
    type={ type }
    { ...props }
  >
    { children }
  </button>
);
