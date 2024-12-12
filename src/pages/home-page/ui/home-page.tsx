"use client";

import { HeaderPage, LayoutContent } from "@shared/";

import { Slider } from "./slider";
import { useHomePage } from "../model";


export const HomePage = () => {
  const { homePage } = useHomePage();

  return (
    <div className="w-full flex flex-col h-full">
      <HeaderPage subTitle={ homePage?.subTitle } title={ homePage?.title } />
      <LayoutContent className="flex-grow">
        <Slider sliders={ homePage?.sliders ?? [] } />
      </LayoutContent>
    </div>
  );
};
