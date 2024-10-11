import { Gabriela } from "next/font/google";
import localFont from "next/font/local";


export const gabriela = Gabriela({
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-gabriela",
  display: "swap",
});

export const localFontFuturaPT = localFont({
  src: [
    {
      path: "../../shared/lib/assets/fonts/futura-pt/FuturaPT-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../shared/lib/assets/fonts/futura-pt/FuturaPT-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../shared/lib/assets/fonts/futura-pt/FuturaPT-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../shared/lib/assets/fonts/futura-pt/FuturaPT-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../shared/lib/assets/fonts/futura-pt/FuturaPT-Book.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../shared/lib/assets/fonts/futura-pt/FuturaPT-Demi.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../shared/lib/assets/fonts/futura-pt/FuturaPT-Light.woff2",
      weight: "300",
      style: "normal",
    }
  ],
  variable: "--font-futura-pt",
  display: "swap",
});
