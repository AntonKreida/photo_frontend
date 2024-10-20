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
    className={ twClassNames("col-span-4 cursor-pointer hover:scale-110 transition-[transform] rounded overflow-hidden hover:z-10", [className]) }
    onClick={ () => actionCard?.(cardPhoto) }
  >
    <AdapterImage
      alt={ cardPhoto.title }
      src={ cardPhoto.href }
    />
  </div>
);
