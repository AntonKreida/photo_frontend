import { ReactNode } from "react";

import { gabriela, localFontFuturaPT , ProviderQuery } from "@app/";
import "@app/styles/index.css";
import { Sidebar } from "@widgets/";

import { metadata } from "./metadata";


interface IRootLayoutProps {
    children: ReactNode;
  }


export default function RootLayout ({ children }: IRootLayoutProps) {
  return (
    <html
      className={ `${gabriela.variable} ${localFontFuturaPT.variable}
      scrollbar-thin scrollbar-thumb-carbon/50 scrollbar-track-white-smoke scrollbar-track-rounded-full
      scrollbar-thumb-rounded-full` }
      lang="ru"
    >
      <head>
        <meta charSet="UTF-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content={ metadata.description as string } name="description" />
        <title>{ metadata.title as string }</title>
      </head>
      <body className="min-h-screen" id="root">
        <ProviderQuery>
          <div className="w-full min-h-screen flex items-center">
            <main className="flex min-h-screen w-full">
              <Sidebar />
              <div className="flex max-w-[1200px] flex-grow overflow-x-hidden mr-auto">
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
