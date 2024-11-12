import { FC, HTMLProps } from "react";

import { twClassNames } from "@shared/lib";


interface ITextAreaProps extends HTMLProps<HTMLTextAreaElement> {
    label: string;
    className?: string;
    errorMessage?: string;
    required?: boolean
}

export const TextArea: FC<ITextAreaProps> = ({
  errorMessage,
  className,
  name,
  label,
  required,
  disabled,
  ...props
}) => (
  <label className="w-full h-fit flex flex-col gap-1 cursor-pointer" htmlFor={ name }>
    <span className={ twClassNames("text-carbon text-base font-futura-pt font-normal", {
      "text-red-400": !!errorMessage,
      "text-carbon/50": disabled
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
      <textarea
        className={ twClassNames(`w-full min-h-24 outline-none py-3 px-5 bg-transparent
        resize-none font-futura-pt font-medium outline-1 focus:outline-carbon
        placeholder:text-carbon text-carbon`, {
          "text-red-400  outline-red-400": !!errorMessage,
          "cursor-not-allowed text-carbon/50": disabled
        }, className) }
        disabled={ disabled }
        id={ name }
        name={ name }
        { ...props }
      />
    </div>
  </label>
);
