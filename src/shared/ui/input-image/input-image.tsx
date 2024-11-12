"use client";

/* eslint-disable @next/next/no-img-element */
import { ExclamationCircleIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { FC, useState } from "react";
import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";

import { twClassNames, FileWithPreview  } from "@shared/lib";


interface IInputImageProps {
    name: string;
    label: string;
    getRootProps: <T extends DropzoneRootProps>(props?: T) => T;
    getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
    onChange: (...event: unknown[]) => void;
    errorMessage?: string;
    value?: File | null;
    disabled?: boolean;
}

export const InputImage: FC<IInputImageProps> = ({
  name,
  label,
  getRootProps,
  getInputProps,
  onChange,
  errorMessage,
  value,
  disabled,
}) =>  {
  const [isError, setIsError] = useState(false);

  return (
    <label className="w-full h-fit flex flex-col gap-1 cursor-pointer" htmlFor={ name }>
      <span className={ twClassNames("text-carbon text-base font-futura-pt font-normal", {
        "text-red-400": !!errorMessage,
        "text-carbon/50": disabled,
      }) }
      >
        { !errorMessage
          ?  label
          :  errorMessage }
      </span>

      <div
        className={ twClassNames(`w-full h-[150px] p-2 bg-white-smoke flex items-center justify-center
                              cursor-pointer outline-none outline-1 text-carbon focus:outline-carbon`, {
          "text-red-400  outline-red-400": !!errorMessage,
          "bg-gray-200 cursor-not-allowed outline-0": disabled,
        }) }
        { ...getRootProps() }
      >
        <input
          { ...getInputProps() }
          disabled={ disabled }
          onChange={ (event) => {
            if(!event.target.files || event.target.files.length === 0) return;
            const file = event.target.files[0];

            const img = new Image();
            img.src = URL.createObjectURL(file);

            img.onload = function(event) {
              const { width, height } = event.target as HTMLImageElement;

              Object.assign(file, {
                width: width || 0,
                height: height || 0,
              });
            };


            Object.assign(file, {
              preview: URL.createObjectURL(file),
            });

            onChange(file);
          } }
        />
        { !value
          ? (
            <PhotoIcon className="w-8 h-8 fill-slate-400" />
          )
          : (
            <>
              <img
                alt="image"
                className={ twClassNames("w-full h-full object-contain object-center pointer-events-none", {
                  "hidden": isError
                }) }
                onError={ () => {
                  setIsError(true);
                } }
                onLoad={ () => setIsError(false) }
                src={ (value as FileWithPreview ).preview }
              />
              { !!isError && (
                <ExclamationCircleIcon className="w-8 h-8 fill-slate-400" />
              ) }
            </>
          ) }
      </div>
    </label>
  );
};
