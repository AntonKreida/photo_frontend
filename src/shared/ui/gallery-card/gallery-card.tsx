import Image from "next/image";
import Link from "next/link";
import { FC, Suspense } from "react";

import { ROUTES_PAGES , IGalleryCard } from "@shared/lib";


interface IGalleryCardProps {
    card: IGalleryCard;
}

export const GalleryCard: FC<IGalleryCardProps> = ({ card }) => (
  <div className="flex flex-col gap-8 items-center col-span-4">
    <Suspense fallback={ <p>Загрузка...</p> }>
      <Image
        alt={ card.title }
        className="w-full h-full object-cover"
        priority
        src={ card.href }
      />


      <Link
        className="text-carbon text-2xl font-normal font-gabriela"
        href={ `${ROUTES_PAGES.PHOTO_SESSIONS}/${card.title}` }
      >
        { card.title }
      </Link>
    </Suspense>
  </div>
);
