"use client";

import { usePathname } from "next/navigation";
import { FC, useCallback, useState } from "react";


import { INavItem } from "@widgets/sidebar/lib";

import { MemoNavItem } from "./nav-item";
import { MemoSubNavItem } from "./sub-nav-item";


interface INavigateMenuProps {
    navItems: INavItem[]
}


export const NavigateMenu: FC<INavigateMenuProps> = ({ navItems }) => {
  const pathname = usePathname();
  const [currentSubNav, setCurrentSubNav] = useState<number | string | null>(null);

  const handleClickSubNav = useCallback((idSubMenu: number | string) => {
    if(currentSubNav === idSubMenu) {
      setCurrentSubNav(null);
      return;
    }
    setCurrentSubNav(idSubMenu);
  }, [currentSubNav]);

  return (
    <nav className="mt-[60px] mb-[30px]">
      <ul className="flex flex-col justify-start flex-[1_0_auto]">
        { navItems?.map((navItem) => {
          if (navItem.subNav && navItem.subNav.length > 0) {
            return (
              <MemoSubNavItem
                handleClickSubNav={ handleClickSubNav }
                isActiveSubNav={ !!navItem.subNav.find((subNav) => !!pathname?.includes(subNav.path?.replace(/\?[\w=]+/gi, "") ?? "")) }
                isOpen={ currentSubNav === navItem.id }
                key={ navItem.id }
                navItem={ navItem }
                pathname={ pathname }
              />
            );
          }

          if(navItem.path) {
            return (
              <MemoNavItem
                isActiveLink={ pathname === navItem.path.replace(/\?[\w=]+/gi, "") || !!pathname?.includes(navItem.path.replace(/\?[\w=]+/gi, "")) }
                key={ navItem.id }
                navItem={ navItem }
              />
            );
          }

          return null;
        }) }
      </ul>
    </nav>
  );
};
