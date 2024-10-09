"use client";

import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";


import { MemoNavItem } from "./nav-item";
import { MemoSubNavItem } from "./sub-nav-item";
import { listNav } from "../../lib";


export const NavigateMenu = () => {
  const pathname = usePathname();
  const [currentActiveIdSubNav, setCurrentActiveIdSubNav] = useState<number | null>(null);

  const handleClickSubNav = useCallback((idSubMenu: number) => {
    if(currentActiveIdSubNav === idSubMenu) {
      setCurrentActiveIdSubNav(null);
      return;
    }

    setCurrentActiveIdSubNav(idSubMenu);
  }, [currentActiveIdSubNav]);


  return (
    <nav className="mt-[60px]">
      <ul className="flex flex-col gap-8 justify-start flex-[1_0_auto]">
        { listNav.map((navItem) => {
          if (navItem.subNav) {
            return (
              <MemoSubNavItem
                handleClickSubNav={ handleClickSubNav }
                isActiveSubNav={ currentActiveIdSubNav === navItem.id }
                key={ navItem.id }
                navItem={ navItem }
              />
            );
          }

          return (
            <MemoNavItem
              isActive={ pathname === navItem.path }
              key={ navItem.id }
              navItem={ navItem }
            />
          );
        }) }
      </ul>
    </nav>
  );
};
