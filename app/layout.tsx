import { ReactNode } from "react";

import { gabriela, localFontFuturaPT } from "@app/";
import "@app/styles/index.css";
import { Sidebar } from "@widgets/";


interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout ({ children }: IRootLayoutProps) {
  return (
    <html
      className={ `${gabriela.variable} ${localFontFuturaPT.variable}` }
      lang="ru"
    >
      <body>
        <div className="w-full min-h-screen flex items-center">
          <main className="flex min-h-screen w-screen">
            <Sidebar />
            { children }
          </main>
        </div>
      </body>
    </html>
  );
}
