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
        grid lg:grid-cols-12 grid-rows-auto gap-[35px]
        lg:[&>*:nth-child(5n-1)]:col-span-6 lg:[&>*:nth-child(5n)]:col-span-6
        lg:[&>*:nth-child(5n-1)]:row-span-2 lg:[&>*:nth-child(5n)]:row-span-2
        lg:[&>*:nth-child(5n-1)]:max-w-[485px] lg:[&>*:nth-child(5n)]:max-w-[485px]
        lg:[&>*:nth-child(5n-1)>div]:max-w-[485px] lg:[&>*:nth-child(5n-1)>div]:h-[485px]
        lg:[&>*:nth-child(5n)>div]:max-w-[485px] lg:[&>*:nth-child(5n)>div]:h-[485px]
        sm:grid-cols-6 grid-cols-3`, {
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
