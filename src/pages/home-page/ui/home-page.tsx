"use client";

import { HeaderPage, LayoutContent } from "@shared/";

import { Slider } from "./slider";
import { useHomePage } from "../model";


export const HomePage = () => {
  const { homePage } = useHomePage();

  return (
    <div className="w-full">
      <HeaderPage subTitle={ homePage?.subTitle } title={ homePage?.title } />
      <LayoutContent>
        <Slider sliders={ homePage?.sliders ?? [] } />
      </LayoutContent>
    </div>
  );
};
