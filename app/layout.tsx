import { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";

import { gabriela, localFontFuturaPT , ProviderQuery } from "@app/";
import "@app/styles/index.css";
import { Sidebar } from "@widgets/";


interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout ({ children }: IRootLayoutProps) {
  return (
    <html
      className={ `${gabriela.variable} ${localFontFuturaPT.variable} scrollbar-thin scrollbar-thumb-carbon/70 scrollbar-track-white-smoke` }
      lang="ru"
    >
      <body className="min-h-screen" id="root">
        <ProviderQuery>
          <div className="w-full min-h-screen flex items-center">
            <main className="flex min-h-screen w-full">
              <Sidebar />
              <div className="flex max-w-[1440px] flex-grow overflow-x-hidden mr-auto">
                <div className="px-[47px] w-full pb-[120px] pt-[152px]">
                  { children }
                </div>
              </div>
            </main>
          </div>
          <div id="modal" />
        </ProviderQuery>
      </body>
    </html>
  );
}
