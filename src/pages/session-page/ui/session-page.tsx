"use client";

import {
  ArrowUpCircleIcon,
  ArrowUturnLeftIcon
} from "@heroicons/react/24/solid";
import { useTransitionState } from "next-transition-router";
import { FC } from "react";

import {
  Button,
  HeaderPage,
  LayoutContent,
  LinkButton,
  ScrollLink,
  twClassNames
} from "@shared/";

import { useSessionPage } from "../model";

import { SessionFeed } from "/src/widgets";


interface ISessionPage {
  pathname: string;
  individualId: string;
}


export const SessionPage: FC<ISessionPage> = ({ pathname, individualId }) => {
  const { sessionPage } = useSessionPage(pathname, individualId);
  const { stage } = useTransitionState();

  return (
    <div className="w-full">
      <HeaderPage
        classNameTitle="normal-case"
        renderComponent={ () => (
          <div className="hidden sm:block w-full lg:w-fit">
            <LinkButton href={ `/${pathname}` }>
              <ArrowUturnLeftIcon className="w-5 h-5" />
              <span>Назад</span>
            </LinkButton>
          </div>
        ) }
        title={ sessionPage?.title }
      />

      <LayoutContent>
        <SessionFeed sessionImages={ sessionPage?.sessionImages ?? [] } />
      </LayoutContent>

      <ScrollLink className="hidden md:block" heightVisible={ 100 } href="#root">
        <Button className="rounded-full p-0 bg-white hover:bg-white">
          <ArrowUpCircleIcon className="w-10 h-10" />
        </Button>
      </ScrollLink>


      <div className={ twClassNames("block sm:hidden w-full p-5 fixed left-0 bottom-0 shadow border-t-2 z-[1000] bg-white", {
        "hidden": stage !== "none"
      }) }
      >
        <LinkButton
          className="w-full lg:w-fit text-base"
          href="https://t.me/Melnikova_foto72"
          isNextJsLink={ false }
          rel="noreferrer"
          target="_blank"
          type="submit"
        >
          Заказать съемку
        </LinkButton>
      </div>
    </div>
  );
};
