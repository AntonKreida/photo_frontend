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
        { children }
      </body>
    </html>
  );
}
