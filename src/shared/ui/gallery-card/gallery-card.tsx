import Link from "next/link";
import { FC } from "react";

import { ROUTES_PAGES , IGalleryCard } from "@shared/lib";
import { AdapterImage } from "@shared/ui/adapter-image";


interface IGalleryCardProps {
    card: IGalleryCard;
}

export const GalleryCard: FC<IGalleryCardProps> = ({ card }) => (
  <div className="flex flex-col gap-8 items-center col-span-4">
    <AdapterImage
      alt={ card.title }
      src={ card.href }
    />

    <Link
      className="text-carbon text-2xl font-normal font-gabriela"
      href={ `${ROUTES_PAGES.PHOTO_SESSIONS}/${card.title}` }
    >
      { card.title }
    </Link>
  </div>
);
