"use client";


import { FC } from "react";

import { Gallery, useGalleries } from "@entities/";


interface IGalleriesProps {
    pathname: string
}

export const Galleries: FC<IGalleriesProps> = ({ pathname }) => {
  const { galleries } = useGalleries(pathname);

  return (
    <div className={ `grid h-fit grid-cols-12 gap-5 mt-14
                  [&>*:nth-child(12n-2)]:col-span-8 [&>*:nth-child(12n-2)]:row-span-2
                  [&>*:nth-child(12n-7)]:col-span-8 [&>*:nth-child(12n-7)]:row-span-2
                  [&>*:nth-last-child(1):nth-child(12n-10)]:col-span-8
                  [&>*:nth-last-child(1):nth-child(12n-11)]:col-span-12
                  [&>*:nth-last-child(1):nth-child(12n-11)]:row-span-2
                  [&>*:nth-last-child(1):nth-child(12n-2)]:col-span-4
                  [&>*:nth-last-child(1):nth-child(12n-2)]:row-span-1
                  [&>*:nth-last-child(2):nth-child(12n-8)]:row-span-2
                  [&>*:nth-last-child(2):nth-child(12n-9)]:row-span-2
                  [&>*:nth-last-child(3):nth-child(12n-3)]:row-span-2
                  [&>*:nth-last-child(3):nth-child(12n-4)]:row-span-2
                  [&>*:nth-last-child(3):nth-child(12n-6)]:row-span-2
                  [&>*:nth-last-child(4):nth-child(12n-11)]:row-span-2
                  [&>*:nth-last-child(5):nth-child(12n-6)]:row-span-2
                  [&>*:nth-last-child(5):nth-child(12n-9)]:row-span-2
                  [&>*:nth-last-child(7):nth-child(12n-11)]:row-span-2` }
    >
      { galleries.map((card) => (
        <Gallery
          card={ card }
          key={ card.documentId }
          pathname={ pathname }
        />
      )) }
    </div>
  );
};
