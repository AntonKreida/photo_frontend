"use client";

import { HeaderPage, LayoutContent, twClassNames } from "@shared/";

import { useHomePage } from "../model";
import { CardLink } from "./card-link";


export const HomePage = () => {
  const { homePage } = useHomePage();

  return (
    <div className="w-full flex flex-col h-full">
      <HeaderPage subTitle={ homePage?.subTitle } title={ homePage?.title } />
      <LayoutContent className={ twClassNames(`
        grid grid-rows-auto gap-[35px] sm:grid-cols-8
        lg:[&>*:nth-child(5n-1)]:col-start-3 lg:grid-cols-12 grid-cols-3`, {
        "flex flex-col justify-center items-center h-full": homePage?.sliders.length === 0
      }) }
      >
        { homePage?.sliders.length
          ? homePage?.sliders.map((slider) => (
            <CardLink
              card={ slider }
              key={ slider.documentId }
            />
          ))
          : null }
      </LayoutContent>
    </div>
  );
};
