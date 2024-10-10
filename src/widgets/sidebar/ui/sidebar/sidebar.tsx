import Link from "next/link";

import {
  Button,
  ROUTES_PAGES,
  InstagramIcon,
  TelegramIcon,
  VkIcon
} from "@shared/";


import { NavigateMenu } from "../navigate-menu";


export const Sidebar = () => (
  <aside className="w-[360px] min-w-[360px] flex-grow py-[120px] px-[65px] overflow-y-auto scrollbar-none h-screen sticky top-0 shadow">
    <div className="flex flex-col justify-between h-full">

      <div className="flex flex-col gap-4">
        <Link href={ ROUTES_PAGES.HOME }>
          <h1 className="text-3xl font-normal font-gabriela uppercase">Александра Марамчина</h1>
        </Link>
        <h2 className="text-xs text-carbon/50 font-normal font-gabriela uppercase tracking-[7px]">Photographer</h2>
      </div>
      <NavigateMenu />
      <div className="mt-auto flex flex-col justify-start py-4">
        <a
          className="text-carbon text-sm font-futura-pt font-medium uppercase py-4"
          href="tel:+79923127209"
        >
          +7 (922) 007-00-35
        </a>
        <div className="flex items-center gap-2 py-4">
          <a><TelegramIcon className="w-5 h-5" /></a>
          <a><VkIcon className="w-5 h-5" /></a>
          <a><InstagramIcon className="w-5 h-5" /></a>
        </div>
        <div className="py-4">
          <Button>
            Связаться со мной
          </Button>
        </div>
      </div>
    </div>
  </aside>
);
