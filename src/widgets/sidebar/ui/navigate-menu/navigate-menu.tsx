"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { twClassNames } from "@shared/";
import ChevronIcon from "@shared/lib/assets/icons/chevron-icon.svg";

import { listNav } from "../../lib";


export const NavigateMenu = () => {
  const pathname = usePathname();
  const [currentActiveIdSubNav, setCurrentActiveIdSubNav] = useState<number | null>(null);

  const handleClickSubNav = (idSubMenu: number) => {
    if(currentActiveIdSubNav === idSubMenu) {
      setCurrentActiveIdSubNav(null);
      return;
    }

    setCurrentActiveIdSubNav(idSubMenu);
  };

  const renderMenu = (navItem: typeof listNav[number]) => {
    if (navItem.subNav) {
      return (
        <li
          className={ twClassNames(`relative text-carbon text-sm font-futura-pt
          font-medium uppercase hover:text-orochimaru max-h-screen group grid grid-rows-[0]
          transition-[grid-template-rows] overflow-hidden`, {
            "grid-rows-[1] visible": currentActiveIdSubNav === navItem.id
          }) }
          key={ navItem.id }
          onClick={ () => handleClickSubNav(navItem.id) }
        >

          <div className={ twClassNames("flex items-center gap-1 cursor-pointer", {
            "text-orochimaru": currentActiveIdSubNav === navItem.id
          }) }
          >
            { navItem.title }
            <ChevronIcon
              className={ twClassNames(`w-[15px] h-[15px] stroke-carbon
                transition-[stroke_transform] group-hover:stroke-orochimaru`, {
                "rotate-90 stroke-orochimaru": currentActiveIdSubNav === navItem.id
              }) }
            />
          </div>
          <div className={ twClassNames("min-h-0 invisible transition-[visibility] delay-500", {
            "visible": currentActiveIdSubNav === navItem.id
          }) }
          >
            <ul className="">Expandable content</ul>
          </div>
        </li>
      );
    }

    return (
      <li
        className={ twClassNames(`relative text-carbon text-sm font-futura-pt
          font-medium uppercase hover:text-orochimaru transition-[color]`,{
          [`before:absolute before:w-[3px] before:left-[-10px]
          before:top-0 before:h-[18px] before:bg-orochimaru`]: pathname === navItem.path
        }) }
        key={ navItem.id }
      >
        <Link
          className={ twClassNames({
            "text-orochimaru": pathname === navItem.path
          }) }
          href={ navItem.path }
        >
          { navItem.title }
        </Link>
      </li>
    );
  };

  return (
    <nav className="mt-[60px]">
      <ul className="flex flex-col gap-8 justify-start flex-[1_0_auto]">
        { listNav.map(renderMenu) }
      </ul>
    </nav>
  );
};
