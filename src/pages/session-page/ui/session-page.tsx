"use client";

import {
  ArrowUpCircleIcon,
  ArrowUturnLeftIcon
} from "@heroicons/react/24/solid";
import { FC } from "react";

import {
  Button,
  HeaderPage,
  LayoutContent,
  LinkButton,
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
          <LinkButton href={ `/${pathname}` }>
            <ArrowUturnLeftIcon className="w-5 h-5" />
            <span>Назад</span>
          </LinkButton>
        ) }
        title={ sessionPage?.title }
      />

      <LayoutContent>
        <SessionFeed sessionImages={ sessionPage?.sessionImages ?? [] } />
      </LayoutContent>

      <ScrollLink heightVisible={ 100 } href="#root">
        <Button className="rounded-full p-0 bg-white hover:bg-white">
          <ArrowUpCircleIcon className="w-10 h-10" />
        </Button>
      </ScrollLink>
    </div>
  );
};
