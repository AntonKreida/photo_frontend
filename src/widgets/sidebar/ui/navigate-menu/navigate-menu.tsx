"use client";

import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";


import { listNav } from "@widgets/sidebar/lib";

import { MemoNavItem } from "./nav-item";
import { MemoSubNavItem } from "./sub-nav-item";


export const NavigateMenu = () => {
  const pathname = usePathname();
  const [currentSubNav, setCurrentSubNav] = useState<number | null>(null);

  const handleClickSubNav = useCallback((idSubMenu: number) => {
    if(currentSubNav === idSubMenu) {
      setCurrentSubNav(null);
      return;
    }
    setCurrentSubNav(idSubMenu);
  }, [currentSubNav]);

  return (
    <nav className="mt-[60px]">
      <ul className="flex flex-col justify-start flex-[1_0_auto]">
        { listNav.map((navItem) => {
          if (navItem.subNav && navItem.subNav.length > 0) {
            return (
              <MemoSubNavItem
                handleClickSubNav={ handleClickSubNav }
                isActiveSubNav={ currentSubNav === navItem.id }
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
