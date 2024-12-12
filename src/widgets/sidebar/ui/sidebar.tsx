"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";

import {
  ROUTES_PAGES,
  InstagramIcon,
  TelegramIcon,
  VkIcon,
  LinkButton,
  twClassNames,
  BurgerButton
} from "@shared/";


import { NavigateMenu } from "./navigate-menu";
import { listNav } from "../lib";
import { useEducationForSidebar } from "../model";


export const Sidebar = () => {
  const { educations } = useEducationForSidebar();

  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);

  const navItems = useMemo(() => listNav.map((navItem) => {
    if(navItem.title === "Обучение") {
      const newSubNav = educations?.map((education, index) => ({
        id: index,
        title: education.title,
        path: `/educations/${education.documentId}`,
      }));

      navItem.subNav = newSubNav;
    }

    return navItem;
  }), [educations]);

  const handlerOnClick = useCallback(() => {
    setIsOpenNav((prev) => !prev);
  }, []);

  return (
    <aside className="lg:min-w-[360px] lg:max-w-[370px]
    w-full lg:flex-grow lg:py-[120px] lg:px-[65px] px-[35px] py-[30px] lg:overflow-y-auto
    scrollbar-none lg:h-screen lg:sticky fixed top-0 shadow bg-white z-50"
    >
      <div className="flex flex-col justify-between h-full">

        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-4">
            <Link className="cursor-pointer" href={ ROUTES_PAGES.HOME }>
              <h1 className="text-2xl lg:text-3xl font-gabriela uppercase">
                Александра
                <br />
                Мельникова
              </h1>
            </Link>

            <h2 className="text-xs text-carbon/50 font-normal font-gabriela uppercase tracking-[7px]">Photographer</h2>
          </div>


          <BurgerButton
            className="lg:hidden"
            isActive={ isOpenNav }
            onClick={ handlerOnClick }
          />
        </div>

        <div
          className={ twClassNames(`lg:h-full grid lg:block grid-rows-[0fr] duration-[0.5s]
            overflow-hidden lg:overflow-visible transition-[grid-template-rows]`, {
            "grid-rows-[1fr]": isOpenNav
          }) }
        >
          <div className={ twClassNames(`min-h-0 lg:h-full lg:min-h-full
          invisible lg:visible transition-[visibility] duration-[0.65s]`, {
            "visible": isOpenNav
          }) }
          >
            <NavigateMenu navItems={ navItems } />

            <div className="mt-auto flex flex-col justify-start lg:py-4">
              <a
                className="text-carbon text-sm font-futura-pt font-medium uppercase py-4"
                href="tel:+79220070075"
              >
                +7 (922) 007-00-75
              </a>
              <div className="flex items-center gap-2 lg:py-4">
                <a
                  className="cursor-pointer"
                  href="https://t.me/Melnikova_foto72"
                  rel="noreferrer"
                  target="_blank"
                >
                  <TelegramIcon className="w-5 h-5 fill-carbon/70" />
                </a>
                <a
                  className="cursor-pointer"
                  href="https://vk.com/melnikova_foto72"
                  rel="noreferrer"
                  target="_blank"
                >
                  <VkIcon className="w-5 h-5 fill-carbon/70" />
                </a>
                <a
                  className="cursor-pointer"
                  href="https://www.instagram.com/melnikova_foto72"
                  rel="noreferrer"
                  target="_blank"
                >
                  <InstagramIcon className="w-5 h-5 fill-carbon/70" />
                </a>
              </div>
              <div className="lg:py-4 hidden lg:block">
                <LinkButton
                  href="https://t.me/Melnikova_foto72"
                  isNextJsLink={ false }
                  rel="noreferrer"
                  target="_blank"
                >
                  Связаться со мной
                </LinkButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );

};
