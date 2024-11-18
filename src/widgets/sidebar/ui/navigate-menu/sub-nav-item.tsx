import { FC, memo } from "react";

import { twClassNames, ChevronIcon } from "@shared/";

import { MemoNavItem } from "./nav-item";
import { ISubNavItem } from "../../lib";


interface ISubNavItemProps {
    navItem: ISubNavItem;
    isActiveSubNav: boolean;
    pathname: string | null;
    handleClickSubNav: (_idSubMenu: number) => void;
}


const SubNavItem: FC<ISubNavItemProps> = ({
  navItem,
  isActiveSubNav,
  handleClickSubNav,
  pathname,
}) => (
  <li
    className={ twClassNames(`relative text-carbon py-4 text-sm font-futura-pt
        font-medium uppercase hover:text-orochimaru max-h-screen group
        transition-[grid-template-rows]`) }
    key={ navItem.id }
    onClick={ () => handleClickSubNav(navItem.id) }
  >

    <div className={ twClassNames("flex items-center gap-1 cursor-pointer", {
      "text-orochimaru": isActiveSubNav
    }) }
    >
      { navItem.title }
      <ChevronIcon
        className={ twClassNames(`w-[15px] h-[15px] stroke-carbon
              transition-[stroke_transform] group-hover:stroke-orochimaru`, {
          "rotate-90 stroke-orochimaru": isActiveSubNav,
        }) }
      />
    </div>

    <div
      className={ twClassNames("gap-4 grid grid-rows-[0fr] pl-6 transition-[grid-template-rows]", {
        "grid-rows-[1fr] ": isActiveSubNav
      }) }
    >
      <ul
        className={ twClassNames("overflow-hidden flex-col justify-start hidden pt-[30px]", {
          "flex": isActiveSubNav
        }) }
        onClick={ (event) => event.stopPropagation() }
      >
        { navItem.subNav?.map((subNavItem) => (
          <MemoNavItem
            isActiveLink={ pathname === subNavItem.path }
            key={ subNavItem.id }
            navItem={ subNavItem }
          />
        )) }
      </ul>
    </div>
  </li>
);

export const MemoSubNavItem = memo(SubNavItem);
