"use client";


import { AdapterImage, HeaderPage, LayoutContent } from "@shared/";

import { useAboutPage } from "../model";


export const AboutPage = () => {
  const { aboutPage } = useAboutPage();

  return (
    <div className="w-full">
      <HeaderPage title={ aboutPage?.title ?? "Обо мне" } />
      <LayoutContent className="flex gap-[60px] flex-wrap justify-center xl:justify-normal xl:flex-nowrap">
        { !!aboutPage?.aboutImage.url && (
          <AdapterImage
            alt={ aboutPage?.aboutImage.name ?? "about" }
            className="w-full h-full object-cover shadow-sm"
            classNameWrapper="w-full aspect-square max-w-[472px] max-h-[472px] rounded-full overflow-hidden"
            height={ aboutPage?.aboutImage?.height ?? 471 }
            priority
            quality={ 100 }
            src={ `${ process.env.NEXT_PUBLIC_API_URL }${ aboutPage?.aboutImage.url }` }
            width={ aboutPage?.aboutImage?.width ?? 614 }
          />
        ) }
        <div
          className="xl:max-w-[400px] xl:flex-grow
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

