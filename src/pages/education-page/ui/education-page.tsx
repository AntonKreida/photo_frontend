"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

import { HeaderPage, LinkButton } from "@shared/";

import { useEducation } from "../model/use-education";


interface IEducationPageProps {
    documentId: string;
}

export const EducationPage: FC<IEducationPageProps> = ({ documentId }) => {
  const { education } = useEducation(documentId);

  console.log(education);

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
    </div>
  );
};

