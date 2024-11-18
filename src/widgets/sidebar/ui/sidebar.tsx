import Link from "next/link";

import {
  ROUTES_PAGES,
  InstagramIcon,
  TelegramIcon,
  VkIcon,
  LinkButton
} from "@shared/";


import { NavigateMenu } from "./navigate-menu";


export const Sidebar = () => (
  <aside className="min-w-[360px] max-w-[370px] w-full flex-grow py-[120px] px-[65px] overflow-y-auto scrollbar-none h-screen sticky top-0 shadow">
    <div className="flex flex-col justify-between h-full">

      <div className="flex flex-col gap-4">
        <Link className="cursor-pointer" href={ ROUTES_PAGES.HOME }>
          <h1 className="text-3xl font-normal font-gabriela uppercase">Александра Мельникова</h1>
        </Link>
        <h2 className="text-xs text-carbon/50 font-normal font-gabriela uppercase tracking-[7px]">Photographer</h2>
      </div>

      <NavigateMenu />
      
      <div className="mt-auto flex flex-col justify-start py-4">
        <a
          className="text-carbon text-sm font-futura-pt font-medium uppercase py-4"
          href="tel:+79220070075"
        >
          +7 (922) 007-00-75
        </a>
        <div className="flex items-center gap-2 py-4">
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
        <div className="py-4">
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
  </aside>
);
