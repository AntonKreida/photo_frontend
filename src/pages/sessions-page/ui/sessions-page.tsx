"use client";

import { ArrowRightIcon, ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { FC, ReactNode } from "react";

import {
  Button,
  FooterPage,
  HeaderPage,
  LinkButton,
  ROUTES_PAGES,
  ScrollLink,
} from "@shared/";

import { useSessionsPage } from "../hook";


interface ISessionsPageProps {
    pathname: string;
    children: ReactNode;
}


export const SessionsPage: FC<ISessionsPageProps> = ({ pathname, children }) => {
  const { data } = useSessionsPage({ pathname });

  return (
    <div className="h-full overflow-hidden">
      <HeaderPage
        renderComponent={ () => (
          <LinkButton
            href="https://t.me/Melnikova_foto72"
            isNextJsLink={ false }
            rel="noreferrer"
            target="_blank"
            type="submit"
          >
            Заказать съемку
          </LinkButton>
        ) }
        subTitle={ data?.subTitlePage }
        title={ data?.titlePage }
      />
      { children }

      <FooterPage classNameInner="justify-center">
        <LinkButton href={ ROUTES_PAGES.PRICE } type="submit">
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

