"use client";


import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

import { Gallery, useGalleries } from "@entities/";
import {
  FooterPage, LinkButton, ROUTES_PAGES, twClassNames
} from "@shared/";


interface IGalleriesProps {
    pathname: string
}

export const Galleries: FC<IGalleriesProps> = ({ pathname }) => {
  const { galleries } = useGalleries(pathname);

  return (
    <>
      <div className={ twClassNames(`
        grid grid-rows-auto gap-[35px] sm:grid-cols-8
        lg:[&>*:nth-child(5n-1)]:col-start-3 lg:grid-cols-12 grid-cols-3`, {
        "flex flex-col justify-center items-center h-full": galleries.length === 0
      }) }
      >
        { galleries.length > 0
          ? (
            galleries.map((card) => (
              <Gallery
                card={ card }
                key={ card.documentId }
                pathname={ pathname }
              />
            ))
          )
          : (
            <div className="text-carbon/50 text-xl font-normal font-futura-pt text-center">
              На данный момент портфолио временно пустое
            </div>
          ) }
      </div>

      { galleries.length > 3 && (
        <FooterPage classNameInner="hidden sm:flex justify-center items-center" classNameWrapper="justify-center hidden sm:block">
          <LinkButton className="w-full lg:w-fit text-base" href={ ROUTES_PAGES.PRICE } type="submit">
            <span>Узнать стоимость услуг</span>
            <ArrowRightIcon className="w-5 h-5" />
          </LinkButton>
        </FooterPage>
      ) }
    </>
  );
};
