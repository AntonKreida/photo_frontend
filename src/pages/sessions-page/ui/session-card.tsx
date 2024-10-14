import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

import { ROUTES_PAGES } from "/src/shared";


interface ISessionCardProps {
    href:  StaticImageData;
    titleCard: string;
}


export const SessionCard: FC<ISessionCardProps> = ({ href, titleCard }) => (
  <div className="flex flex-col gap-8 items-center col-span-4">
    <Image
      alt={ titleCard }
      className="w-full h-full object-cover"
      src={ href }
    />

    <Link
      className="text-carbon text-2xl font-normal font-gabriela"
      href={ `${ROUTES_PAGES.PHOTO_SESSIONS}/${titleCard}` }
    >
      { titleCard }
    </Link>
  </div>
);
