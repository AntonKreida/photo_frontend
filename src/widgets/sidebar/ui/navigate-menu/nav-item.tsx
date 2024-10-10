import Link from "next/link";
import { FC, memo } from "react";

import { twClassNames } from "@shared/";

import { INavItem } from "../../types";


interface INavItemProps {
    navItem: INavItem;
    isActiveLink: boolean;
}

const NavItem: FC<INavItemProps> = ({ navItem, isActiveLink }) => (
  <li
    className={ twClassNames(`relative text-carbon text-sm font-futura-pt
      font-medium uppercase hover:text-orochimaru transition-[color]`,{
      [`before:absolute before:w-[3px] before:left-[-10px]
      before:top-0 before:h-[18px] before:bg-orochimaru`]: isActiveLink
    }) }
    key={ navItem.id }
  >
    <Link
      className={ twClassNames({
        "text-orochimaru": isActiveLink
      }) }
      href={ navItem.path }
    >
      { navItem.title }
    </Link>
  </li>
);

export const MemoNavItem = memo(NavItem);
