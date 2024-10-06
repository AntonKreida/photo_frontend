import { ReactNode } from "react";

import { gabriela, localFontFuturaPT } from "@app/styles/fonts/_fonts";
import "@app/styles/index.css";


interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout ({ children }: IRootLayoutProps) {
  return (
    <html
      className={ `${gabriela.variable} ${localFontFuturaPT.variable}` }
      lang="en"
    >
      <body>
        <div className="w-full min-h-screen flex items-center">
          <main className="flex min-h-screen w-screen">
            { children }
          </main>
        </div>
      </body>
    </html>
  );
}
