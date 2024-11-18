"use client";

import Image from "next/image";

import { HeaderPage, LayoutContent } from "@shared/";

import { useAboutPage } from "../model";


export const AboutPage = () => {
  const { aboutPage } = useAboutPage();

  return (
    <div className="w-full">
      <HeaderPage title={ aboutPage?.title } />
      <LayoutContent className="flex gap-[65px] flex-wrap">
        <div className="w-[471px] h-[614px] flex-shrink-0">
          <Image
            alt={ aboutPage?.aboutImage.name ?? "about" }
            className="w-full h-full object-cover"
            height={ aboutPage?.aboutImage?.height ?? 471 }
            priority
            quality={ 100 }
            src={ `${ process.env.NEXT_PUBLIC_API_URL }${ aboutPage?.aboutImage?.url }` }
            width={ aboutPage?.aboutImage?.width ?? 614 }
          />
        </div>
        <div
          className="max-w-[400px]
                [&_h1]:text-xl [&_h1]:text-carbon [&_h1]:font-normal [&_h1]:font-gabriela [&_h1]:mb-4
                [&_p]:text-xl [&_p]:text-carbon [&_p]:font-light [&_p]:font-futura-pt [&_p]:mb-4
                [&_ul]:list-none [&_ul]:mb-4
                [&_li]:text-xl [&_li]:text-carbon [&_li]:font-light [&_li]:font-futura-pt [&_li]:relative"
          dangerouslySetInnerHTML={{ __html: aboutPage?.descriptions ?? "" }}
        />

      </LayoutContent>
    </div>
  );
};

