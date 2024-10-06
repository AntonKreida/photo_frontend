import { FC, HTMLProps } from "react";

import { twClassNames } from "@shared/lib";


interface ITextAreaProps extends HTMLProps<HTMLTextAreaElement> {
    isError?: boolean
    className?: string
    errorMessage?: string
}

export const TextArea: FC<ITextAreaProps> = ({
  isError, errorMessage="Ошибка", className, ...props
}) => (
  <div className="w-full bg-white-smoke relative">
    <textarea
      className={ twClassNames(`w-full min-h-24 outline-none py-3 px-5 bg-transparent
        resize-none font-futura-pt font-medium
        placeholder:text-carbon text-carbon`, className) }
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
