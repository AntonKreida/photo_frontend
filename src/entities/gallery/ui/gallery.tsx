import { Link } from "next-transition-router";
import { FC } from "react";

import { AdapterImage } from "@shared/";

import { IGallery } from "../lib";


interface IGalleryProps {
    card: IGallery;
    pathname: string
}

export const Gallery: FC<IGalleryProps> = ({ card, pathname }) => (
  <Link
    className="flex flex-col gap-4 items-center sm:max-w-[300px]
    h-fit col-span-3 w-full lg:col-span-4 group rounded-sm overflow-hidden"
    href={ `${pathname}/${card.documentId}` }
  >
    <AdapterImage
      alt={ card.titleImage.name }
      className="object-cover object-center"
      classNameWrapper="sm:h-[310px] h-[500px] w-full w-full overflow-hidden shadow"
      height={ card.titleImage.height }
      priority
      quality={ 100 }
      src={ `${ process.env.NEXT_PUBLIC_API_URL }${ card.titleImage.url }` }
      width={ card.titleImage.width }
    />

    <span className="text-carbon text-2xl font-normal font-gabriela text-center group-hover:text-gray-300 transition-[color]">
      { card.title }
    </span>
  </Link>
);
