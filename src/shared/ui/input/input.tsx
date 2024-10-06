import { FC, HTMLProps } from "react";

import { twClassNames } from "@shared/lib";


interface IInputProps extends HTMLProps<HTMLInputElement> {
    name: string;
    className?: string;
    isError?: boolean;
    errorMessage?: string;
}

export const Input: FC<IInputProps> = ({
  className,
  isError,
  errorMessage="Ошибка",
  ...props
}) => (
  <div className="w-full h-fit bg-white-smoke relative">
    <input
      className={ twClassNames("w-full py-3 px-5 bg-none font-futura-pt font-medium placeholder:text-carbon text-carbon", className) }
      { ...props }
    />
    { !!isError && (
      <div className="text-red-400 absolute flex font-futura-pt font-medium items-center px-5 bg-white-smoke
        top-1/2 -translate-y-1/2 left-0 pointer-events-none w-full h-full"
      >
        { errorMessage }
      </div>
    ) }
  </div>
);
