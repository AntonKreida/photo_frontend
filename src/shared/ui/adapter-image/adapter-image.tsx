"use client";

import Image, { ImageProps } from "next/image";
import { FC, useState } from "react";

import { twClassNames } from "@shared/lib";
import { STATUS_LOADED_IMAGE } from "@shared/lib/enums";

import { SkeletonAdapterImage } from "./skeleton-adapter-image";


export const AdapterImage: FC<ImageProps> = ({ alt, src, ...props }) => {
  const [currentStatus, setCurrentStatus] = useState<STATUS_LOADED_IMAGE>(STATUS_LOADED_IMAGE.LOADING);

  const handleOnErrorImage = () => {
    setCurrentStatus(STATUS_LOADED_IMAGE.ERROR);
  };

  const handleOnLoadImage = () => {
    setCurrentStatus(STATUS_LOADED_IMAGE.SUCCESS);
  };

  return (
    <div className="w-full h-full relative">
      <Image
        alt={ alt }
        className={ twClassNames("w-full h-full object-cover pointer-events-none", {
          "opacity-0": currentStatus === STATUS_LOADED_IMAGE.LOADING,
        }) }
        onError={ handleOnErrorImage }
        onLoad={ handleOnLoadImage }
        src={ src }
        { ...props }
      />

      { !!(STATUS_LOADED_IMAGE.LOADING === currentStatus || STATUS_LOADED_IMAGE.ERROR === currentStatus) && (
        <SkeletonAdapterImage status={ currentStatus } />
      ) }
    </div>
  );
};
