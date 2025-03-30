import { ReactNode } from "react";

import {
  gabriela, localFontFuturaPT , ProviderQuery, ProviderTransitionRoute
} from "@app/";
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
        <link href="/favicon.ico" rel="icon" type="image/x-icon" />
        <meta content={ metadata.description as string } name="description" />
        <meta content={ metadata.keywords as string } name="keywords" />
        <title>{ metadata.title as string }</title>
      </head>
      <body className="min-h-screen" id="root">
        <ProviderQuery>
          <div className="w-full min-h-screen flex items-center">
            <main className="flex min-h-screen w-full lg:flex-row flex-col">
              <Sidebar />
              <div className="flex lg:max-w-[1560px] w-full lg:w-auto flex-grow overflow-x-hidden mr-auto">
                <div className="px-5 md:px-[35px] w-full pb-[110px] md:pb-[80px] lg:pb-[50px] pt-[180px] lg:pt-[152px]">
                  <ProviderTransitionRoute>
                    { children }
                  </ProviderTransitionRoute>
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
