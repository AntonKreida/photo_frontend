import { ComponentProps, FC } from "react";
import { PatternFormat } from "react-number-format";

import { twClassNames } from "@shared/lib";


interface IInputPhoneProps extends ComponentProps<typeof PatternFormat> {
    name: string;
    label: string;
    className?: string;
    errorMessage?: string;
}

export const InputPhone: FC<IInputPhoneProps> = ({
  className,
  errorMessage,
  label,
  name,
  ...props
}) => (
  <label className="w-full h-fit flex flex-col gap-1 cursor-pointer" htmlFor={ name }>
    <span className={ twClassNames("text-carbon text-base font-futura-pt font-normal", { "text-red-400": !!errorMessage }) }>
      { !errorMessage
        ?  label
        :  errorMessage }
    </span>
    <div className="bg-white-smoke">
      <PatternFormat
        className={ twClassNames(`w-full py-3 outline-none px-5 bg-transparent
            font-futura-pt font-medium placeholder:text-carbon outline-1 text-carbon
            focus:outline-carbon`, {
          "text-red-400  outline-red-400": !!errorMessage,
        }, className) }
        id={ name }
        name={ name }
        { ...props }
      />
    </div>
  </label>
);
