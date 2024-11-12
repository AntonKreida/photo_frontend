import { FC, HTMLProps } from "react";

import { twClassNames } from "@shared/lib";


interface IInputProps extends HTMLProps<HTMLInputElement> {
    name: string;
    label: string;
    className?: string;
    errorMessage?: string;
    required?: boolean
}

export const Input: FC<IInputProps> = ({
  className,
  errorMessage,
  label,
  name,
  required,
  disabled,
  ...props
}) => (
  <label className="w-full h-fit flex flex-col gap-1 cursor-pointer" htmlFor={ name }>
    <span className={ twClassNames("text-carbon text-base font-futura-pt font-normal", {
      "text-red-400": !!errorMessage,
      "text-carbon/50": disabled,
    }) }
    >
      { !errorMessage
        ?  required
          ? `${label}*`
          : label
        :  errorMessage }
    </span>
    <div className={ twClassNames("bg-white-smoke", {
      "bg-gray-200": disabled
    }) }
    >
      <input
        autoComplete="off"
        className={ twClassNames(`w-full py-3 outline-none px-5 bg-transparent
            font-futura-pt font-medium placeholder:text-carbon outline-1 text-carbon
            focus:outline-carbon`, {
          "text-red-400  outline-red-400": !!errorMessage,
          "cursor-not-allowed text-carbon/50": disabled
        }, className) }
        disabled={ disabled }
        id={ name }
        { ...props }
      />
    </div>
  </label>
);
