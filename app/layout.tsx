import { ReactNode } from "react";

import "./globals.css";


interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout ({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  );
}
