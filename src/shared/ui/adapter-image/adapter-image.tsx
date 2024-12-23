"use client";

import Image, { ImageProps } from "next/image";
import { FC, useState } from "react";

import { twClassNames, STATUS_LOADED_IMAGE } from "@shared/lib";

import { SkeletonAdapterImage } from "./skeleton-adapter-image";


interface IAdapterImageProps extends ImageProps {
    className?: string;
    classNameWrapper?: string;
    classNameSkeleton?: string;
}


export const AdapterImage: FC<IAdapterImageProps> = ({
  alt, src, className, classNameWrapper, classNameSkeleton, ...props
}) => {
  const [currentStatus, setCurrentStatus] = useState<STATUS_LOADED_IMAGE>(STATUS_LOADED_IMAGE.LOADING);

  const handleOnErrorImage = () => {
    setCurrentStatus(STATUS_LOADED_IMAGE.ERROR);
  };

  const handleOnLoadImage = () => {
    setCurrentStatus(STATUS_LOADED_IMAGE.SUCCESS);
  };

  return (
    <div className={ twClassNames("relative", [classNameWrapper]) }>
      <Image
        alt={ alt }
        className={ twClassNames("w-full h-full pointer-events-none", {
          "opacity-0": currentStatus === STATUS_LOADED_IMAGE.LOADING,
        }, [className]) }
        onError={ handleOnErrorImage }
        onLoad={ handleOnLoadImage }
        src={ src }
        { ...props }
      />

      { !!(currentStatus === STATUS_LOADED_IMAGE.LOADING || currentStatus === STATUS_LOADED_IMAGE.ERROR) && (
        <SkeletonAdapterImage className={ classNameSkeleton } status={ currentStatus } />
      ) }
    </div>
  );
};
