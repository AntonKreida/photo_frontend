import { Link } from "next-transition-router";
import { FC } from "react";

import { AdapterImage } from "@shared/";

import { ISlider } from "../lib";


interface ICardLinkProps {
    card: ISlider;
}

export const CardLink: FC<ICardLinkProps> = ({ card }) => (
  <Link
    className="flex flex-col gap-4 items-center sm:max-w-[300px]
    h-fit col-span-3 w-full sm:col-span-4 group rounded-sm overflow-hidden"
    href={ `${card.url}` }
  >
    <AdapterImage
      alt={ card.title }
      className="object-cover object-center"
      classNameWrapper="sm:h-[310px] h-[500px] w-full w-full overflow-hidden shadow"
      height={ card.sliderImage.height }
      priority
      quality={ 100 }
      src={ `${ process.env.NEXT_PUBLIC_API_URL }${ card.sliderImage.url }` }
      width={ card.sliderImage.width }
    />

    <span className="text-carbon text-2xl font-normal font-gabriela text-center group-hover:text-gray-300 transition-[color]">
      { card.title }
    </span>
  </Link>
);
