import { FC, memo } from "react";

import { twClassNames, ChevronIcon } from "@shared/";

import { MemoNavItem } from "./nav-item";
import { ISubNavItem } from "../../lib";


interface ISubNavItemProps {
    navItem: ISubNavItem;
    isOpen: boolean;
    pathname: string | null;
    handleClickSubNav: (_idSubMenu: number) => void;
    isActiveSubNav?: boolean;
}


const SubNavItem: FC<ISubNavItemProps> = ({
  navItem,
  isOpen,
  handleClickSubNav,
  pathname,
  isActiveSubNav,
}) => (
  <li
    className={ twClassNames(`relative text-carbon py-4 text-sm font-futura-pt
        font-medium uppercase hover:text-orochimaru max-h-screen group
        transition-[grid-template-rows]`) }
    key={ navItem.id }
  >

    <div
      className={ twClassNames("flex items-center gap-1 cursor-pointer w-fit", {
        [`before:absolute before:w-[3px] before:left-[-10px] before:translate-y-[-50%]
      before:top-[50%] before:h-[18px] before:bg-orochimaru last:before:translate-y-0 text-orochimaru`]: isActiveSubNav,
        [`before:absolute before:w-[3px] before:left-[-10px] before:translate-y-[0%]
      before:top-4 before:h-[18px] before:bg-orochimaru last:before:translate-y-0 text-orochimaru`]: isOpen || isActiveSubNav
      }) }
      onClick={ () => handleClickSubNav(navItem.id) }
    >
      { navItem.title }
      <ChevronIcon
        className={ twClassNames(`w-[15px] h-[15px] stroke-carbon
              transition-[stroke_transform] group-hover:stroke-orochimaru`, {
          "rotate-90": isOpen,
          "stroke-orochimaru": isOpen || isActiveSubNav
        }) }
      />
    </div>

    <div
      className={ twClassNames("gap-4 grid grid-rows-[0fr] pl-6 transition-[grid-template-rows]", {
        "grid-rows-[1fr] ": isOpen
      }) }
    >
      <ul
        className={ twClassNames("pl-[10px] flex-col justify-start hidden pt-[15px]", {
          "flex overflow-hidden": isOpen
        }) }
        onClick={ (event) => event.stopPropagation() }
      >
        { navItem.subNav?.map((subNavItem) => (
          <MemoNavItem
            isActiveLink={ pathname === subNavItem.path || !!pathname?.includes(subNavItem.path) }
            key={ subNavItem.id }
            navItem={ subNavItem }
          />
        )) }
      </ul>
    </div>
  </li>
);

export const MemoSubNavItem = memo(SubNavItem);
