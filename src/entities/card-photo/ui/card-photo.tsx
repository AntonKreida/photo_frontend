"use client";

import { FC } from "react";

import { AdapterImage, twClassNames } from "@shared/";

import { ICardPhoto } from "../model";


interface ICardPhotoProps {
    cardPhoto: ICardPhoto;
    className?: string;
    actionCard?: (photo: ICardPhoto) => void;
}

export const CardPhoto: FC<ICardPhotoProps> = ({ className, cardPhoto, actionCard }) => (
  <div
    className={ twClassNames("col-span-4 rounded overflow-hidden", {
      "cursor-pointer hover:scale-110 transition-[transform] hover:z-10": !!actionCard
    }, [className]) }
    onClick={ () => actionCard?.(cardPhoto) }
  >
    <AdapterImage
      alt={ cardPhoto.title }
      height={ 100 }
      src={ cardPhoto.href }
      unoptimized
      width={ 100 }
    />
  </div>
);
