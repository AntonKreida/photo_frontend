"use client";

import {
  ArrowRightIcon,
  ArrowUpCircleIcon,
  ArrowUturnLeftIcon
} from "@heroicons/react/24/solid";
import { FC } from "react";

import {
  Button,
  ButtonBack,
  FooterPage,
  HeaderPage,
  LinkButton,
  ROUTES_PAGES,
  ScrollLink
} from "@shared/";

import { useSessionPage } from "../model";

import { SessionFeed } from "/src/widgets";


interface ISessionPage {
  pathname: string;
  individualId: string;
}


export const SessionPage: FC<ISessionPage> = ({ pathname, individualId }) => {
  const { sessionPage } = useSessionPage(pathname, individualId);

  return (
    <div className="w-full">
      <HeaderPage
        classNameTitle="normal-case"
        renderComponent={ () => (
          <ButtonBack>
            <ArrowUturnLeftIcon className="w-5 h-5" />
            <span>Назад</span>
          </ButtonBack>
        ) }
        title={ sessionPage?.title }
      />

      <SessionFeed sessionImages={ sessionPage?.sessionImages ?? [] } />

      <ScrollLink className="fixed bottom-10 right-5 z-20" heightVisible={ 100 } href="#root">
        <Button className="rounded-full p-0 bg-white hover:bg-white">
          <ArrowUpCircleIcon className="w-10 h-10" />
        </Button>
      </ScrollLink>

      <FooterPage classNameInner="justify-center">
        <LinkButton href={ ROUTES_PAGES.PRICE }>
          <span>Узнать стоимость услуг</span>
          <ArrowRightIcon className="w-5 h-5" />
        </LinkButton>
      </FooterPage>
    </div>
  );
};
