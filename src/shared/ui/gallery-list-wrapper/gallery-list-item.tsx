import Link from "next/link";
import { FC } from "react";

import { ROUTES_PAGES , IGalleryCard } from "@shared/lib";
import { AdapterImage } from "@shared/ui/adapter-image";


interface IGalleryListItemProps {
    card: IGalleryCard;
}

export const GalleryListItem: FC<IGalleryListItemProps> = ({ card }) => (
  <Link
    className="flex flex-col gap-4 items-center col-span-4 group overflow-hidden"
    href={ `${ROUTES_PAGES.PHOTO_SESSIONS}/${card.id}` }
  >
    <AdapterImage
      alt={ card.title }
      src={ card.href }
    />

    <span className="text-carbon text-2xl font-normal font-gabriela group-hover:text-gray-300 transition-[color]">
      { card.title }
    </span>
  </Link>
);
