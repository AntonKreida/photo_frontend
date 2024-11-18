"use client";


import { FC } from "react";

import { Gallery, useGalleries } from "@entities/";


interface IGalleriesProps {
    pathname: string
}

export const Galleries: FC<IGalleriesProps> = ({ pathname }) => {
  const { galleries } = useGalleries(pathname);

  return (
    <div className={ `grid h-fit grid-cols-12 grid-rows-auto gap-[35px] mt-14
                  [&>*:nth-child(5n-1)]:col-span-6 [&>*:nth-child(5n)]:col-span-6
                  [&>*:nth-child(5n-1)]:row-span-2 [&>*:nth-child(5n)]:row-span-2
                  [&>*:nth-child(5n-1)]:w-[485px] [&>*:nth-child(5n)]:w-[485px]
                  [&>*:nth-child(5n-1)>div]:w-[485px] [&>*:nth-child(5n-1)>div]:h-[485px]
                  [&>*:nth-child(5n)>div]:w-[485px] [&>*:nth-child(5n)>div]:h-[485px]` }
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
