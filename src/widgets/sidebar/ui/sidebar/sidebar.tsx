import Link from "next/link";

import { ROUTES_PAGES } from "/src/shared";


export const Sidebar = () => (
  <aside className="max-w-[360px] w-full py-[120px] px-[65px] overflow-y-auto h-screen sticky top-0 shadow">
    <div className="flex flex-col justify-between">

      <div className="flex flex-col gap-4">
        <Link href={ ROUTES_PAGES.HOME }>
          <h1 className="text-3xl font-normal font-gabriela uppercase">Александра Марамчина</h1>
        </Link>
        <h2 className="text-xs text-carbon/50 font-normal font-gabriela uppercase tracking-[7px]">Photographer</h2>
      </div>

    </div>
  </aside>
);
