import Link from "next/link";
import { FC, memo } from "react";

import { twClassNames } from "@shared/";

import { listNav } from "../../lib";


interface INavItemProps {
    navItem: typeof listNav[number];
    isActive: boolean;
}

const NavItem: FC<INavItemProps> = ({ navItem, isActive }) => (
  <li
    className={ twClassNames(`relative text-carbon text-sm font-futura-pt
      font-medium uppercase hover:text-orochimaru transition-[color]`,{
      [`before:absolute before:w-[3px] before:left-[-10px]
      before:top-0 before:h-[18px] before:bg-orochimaru`]: isActive
    }) }
    key={ navItem.id }
  >
    <Link
      className={ twClassNames({
        "text-orochimaru": isActive
      }) }
      href={ navItem?.path
        ? navItem.path
        : "" }
    >
      { navItem.title }
    </Link>
  </li>
);

export const MemoNavItem = memo(NavItem);
