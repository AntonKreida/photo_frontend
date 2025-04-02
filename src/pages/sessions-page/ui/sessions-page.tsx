"use client";

import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { useTransitionState } from "next-transition-router";
import { FC, ReactNode } from "react";

import {
  Button,
  HeaderPage,
  LayoutContent,
  LinkButton,
  ScrollLink,
  twClassNames,
} from "@shared/";

import { useSessionsPage } from "../hook";


interface ISessionsPageProps {
    pathname: string;
    children: ReactNode;
}


export const SessionsPage: FC<ISessionsPageProps> = ({ pathname, children }) => {
  const { data } = useSessionsPage({ pathname });
  const { stage } = useTransitionState();

  return (
    <div className="h-full overflow-hidden">
      <HeaderPage
        renderComponent={ () => (
          <div className="hidden sm:block w-full lg:w-fit">
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
        ) }
        subTitle={ data?.subTitlePage }
        title={ data?.titlePage }
      />

      <LayoutContent>
        { children }
      </LayoutContent>

      <ScrollLink heightVisible={ 100 } href="#root">
        <Button className="rounded-full p-0 bg-white hover:bg-white">
          <ArrowUpCircleIcon className="w-10 h-10" />
        </Button>
      </ScrollLink>


      <div className={ twClassNames("block sm:hidden w-full p-5 fixed left-0 bottom-0 shadow border-t-2 z-[1000] bg-white", {
        "hidden": stage !== "none",
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

