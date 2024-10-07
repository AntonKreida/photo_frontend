import Link from "next/link";

import { listNav } from "../../lib";


export const NavigateMenu = () => (
  <nav className="mt-[60px]">
    <ul className="flex flex-col gap-8 justify-start flex-[1_0_auto]">
      { listNav.map((navItem) => (
        <li key={ navItem.id }>
          <Link
            className="text-carbon text-sm font-futura-pt font-medium uppercase"
            href={ navItem.path }
          >
            { navItem.title }
          </Link>
        </li>
      )) }
    </ul>
  </nav>
);
