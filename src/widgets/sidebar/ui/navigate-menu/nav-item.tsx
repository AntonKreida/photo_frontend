import Link from "next/link";
import { FC, memo } from "react";

import { twClassNames } from "@shared/";

import { INavItem } from "../../lib";


interface INavItemProps {
    navItem: INavItem;
    isActiveLink: boolean;
}

const NavItem: FC<INavItemProps> = ({ navItem, isActiveLink }) => (
  <li
    className={ twClassNames(`relative text-carbon text-sm py-4 font-futura-pt last:pb-0
      font-medium uppercase hover:text-orochimaru transition-[color]`,{
      [`before:absolute before:w-[3px] before:left-[-10px] before:translate-y-[-50%]
      before:top-[50%] before:h-[18px] before:bg-orochimaru`]: isActiveLink
    }) }
    key={ navItem.id }
  >
    <Link
      className={ twClassNames({
        "text-orochimaru": isActiveLink
      }) }
      href={ navItem.path }
      passHref
    >
      { navItem.title }
    </Link>
  </li>
);

export const MemoNavItem = memo(NavItem);
