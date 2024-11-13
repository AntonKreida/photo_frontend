"use client";

import { ArrowRightIcon, ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

import {
  Button,
  FooterPage,
  GalleryListWrapper,
  HeaderPage,
  LinkButton,
  ROUTES_PAGES,
  ScrollLink,
} from "@shared/";

import { useSessionsPage } from "../hook";
import mockImage from "../mock/mock.jpg";


interface ISessionsPageProps {
    pathname: string
}


export const SessionsPage: FC<ISessionsPageProps> = ({ pathname }) => {
  const { data } = useSessionsPage({ pathname });

  return (
    <div className="w-full">
      <HeaderPage
        subTitle={data?.subPageTitle}
        title={data?.titlePage}
        renderComponent={ () => (
        <LinkButton
            href="https://t.me/Melnikova_foto72"
            isNextJsLink={ false }
            rel="noreferrer"
            target="_blank"
        >
            Заказать съемку
        </LinkButton>
        ) }
      />

      <GalleryListWrapper galleryList={ Array.from({ length: 12 }).map((_, index) => ({ id: index, href: mockImage, title: "Алена" })) } />

      <FooterPage classNameInner="justify-center">
        <LinkButton href={ ROUTES_PAGES.PRICE }>
          <span>Узнать стоимость услуг</span>
          <ArrowRightIcon className="w-5 h-5" />
        </LinkButton>
      </FooterPage>

      <ScrollLink className="fixed bottom-10 right-5 z-20" heightVisible={ 100 } href="#root">
        <Button className="rounded-full p-0 bg-white hover:bg-white">
          <ArrowUpCircleIcon className="w-10 h-10" />
        </Button>
      </ScrollLink>
    </div>
  );
};

