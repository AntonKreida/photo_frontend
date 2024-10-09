import { FC, memo } from "react";

import { twClassNames, ChevronIcon } from "@shared/";

import { listNav } from "../../lib";


interface ISubNavItemProps {
    navItem: typeof listNav[number];
    isActiveSubNav: boolean;
    handleClickSubNav: (_idSubMenu: number) => void;
}


const SubNavItem: FC<ISubNavItemProps> = ({ navItem, isActiveSubNav, handleClickSubNav }) => (
  <li
    className={ twClassNames(`relative text-carbon text-sm font-futura-pt
        font-medium uppercase hover:text-orochimaru max-h-screen group
        transition-[grid-template-rows]`) }
    key={ navItem.id }
    onClick={ () => handleClickSubNav(navItem.id) }
  >

    <i className={ twClassNames("flex items-center gap-1 cursor-pointer", {
      "text-orochimaru": isActiveSubNav
    }) }
    >
      { navItem.title }
      <ChevronIcon
        className={ twClassNames(`w-[15px] h-[15px] stroke-carbon
              transition-[stroke_transform] group-hover:stroke-orochimaru`, {
          "rotate-90 stroke-orochimaru": isActiveSubNav
        }) }
      />
    </i>

    <div
      className={ twClassNames("gap-4 grid grid-rows-[0fr] pl-6 transition-[grid-template-rows]", {
        "grid-rows-[1fr]": isActiveSubNav
      }) }
    >
      <ul className="overflow-hidden">
        <li>Тут типо контент</li>
      </ul>
    </div>
  </li>
);

export const MemoSubNavItem = memo(SubNavItem);
