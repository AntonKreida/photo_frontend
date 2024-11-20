"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

import { AdapterImage, HeaderPage, LinkButton } from "@shared/";

import { useEducation } from "../model/use-education";


interface IEducationPageProps {
    documentId: string;
}

export const EducationPage: FC<IEducationPageProps> = ({ documentId }) => {
  const { education } = useEducation(documentId);

  return  (
    <div className="w-full">
      <HeaderPage
        classNameTitle="uppercase"
        renderComponent={ () => (
          <LinkButton
            href="https://t.me/Melnikova_foto72"
            rel="noreferrer"
            target="_blank"
            type="submit"
          >
            <span>Записаться</span>
            <ArrowRightIcon className="w-5 h-5" />
          </LinkButton>
        ) }
        subTitle={ education?.subTitle }
        title={ education?.title }
      />

      <div className="mt-[57px] w-full h-[564px]">
        <AdapterImage
          alt={ education?.titleImage.name ?? "education" }
          className="object-cover object-center"
          classNameWrapper="w-full h-full"
          height={ education?.titleImage.height ?? 564 }
          priority
          quality={ 100 }
          src={ `${ process.env.NEXT_PUBLIC_API_URL }${ education?.titleImage?.url }` }
          width={ education?.titleImage.width ?? 1024 }
        />
      </div>
    </div>
  );
};

