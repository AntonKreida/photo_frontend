import Link from "next/link";
import { FC } from "react";

import { AdapterImage } from "@shared/";

import { IGallery } from "../lib";


interface IGalleryProps {
    card: IGallery;
    pathname: string
}

export const Gallery: FC<IGalleryProps> = ({ card, pathname }) => (
  <Link
    className="flex flex-col gap-4 items-center col-span-4 w-fit h-fit group"
    href={ `${pathname}/${card.documentId}` }
  >
    <AdapterImage
      alt={ card.titleImage.name }
      className="object-cover object-center"
      classNameWrapper="h-[310px] w-[300px] overflow-hidden"
      height={ card.titleImage.height }
      priority
      quality={ 100 }
      src={ `${ process.env.NEXT_PUBLIC_API_URL }${ card.titleImage.url }` }
      width={ card.titleImage.width }
    />

    <span className="text-carbon text-2xl font-normal font-gabriela group-hover:text-gray-300 transition-[color]">
      { card.title }
    </span>
  </Link>
);
