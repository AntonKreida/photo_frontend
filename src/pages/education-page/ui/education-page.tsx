"use client";

import { ArrowRightIcon, ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

import {
  AdapterImage,
  Button,
  FooterPage,
  HeaderPage,
  LayoutContent,
  LinkButton,
  ScrollLink
} from "@shared/";
import { StudentWorkFeed } from "@widgets/";

import { useEducation } from "../model";


const intlNumberFormat = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
  currency: "RUB",
});

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
          <div className="hidden sm:block w-full lg:w-fit">
            <LinkButton
              href="https://t.me/Melnikova_foto72"
              rel="noreferrer"
              target="_blank"
              type="submit"
            >
              <span>Записаться</span>
              <ArrowRightIcon className="w-5 h-5" />
            </LinkButton>
          </div>
        ) }
        subTitle={ education?.subTitle }
        title={ education?.title }
      />

      <LayoutContent>
        <div className="w-full h-[564px]">
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

        <div
          className="mt-14 text-xl text-carbon font-futura-pt font-normal [&_h1]:font-gabriela [&_h1]:mb-4
                [&_p]:text-xl [&_p]:text-carbon [&_p]:mb-2
                [&_ul]:mb-4 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:list-inside"
          dangerouslySetInnerHTML={{ __html: education?.description ?? "" }}
        />

        { !!education?.price && (
          <div className="flex items-center justify-center mt-10 flex-col gap-4 bg-orochimaru/15 py-5 px-3 rounded-sm shadow">
            <span className="text-carbon font-gabriela text-xl text-center font-normal uppercase">
              { `Стоимость обучения:  ${ intlNumberFormat.format(education?.price) }` }
            </span>

            <div className="hidden md:block md:w-full lg:w-fit">
              <LinkButton
                className=""
                href="https://t.me/Melnikova_foto72"
                rel="noreferrer"
                target="_blank"
                type="submit"
              >
                <span>Записаться на обучение</span>
              </LinkButton>
            </div>
          </div>
        ) }

        <ScrollLink className="hidden md:block" heightVisible={ 100 } href="#root">
          <Button className="rounded-full p-0 bg-white hover:bg-white">
            <ArrowUpCircleIcon className="w-10 h-10" />
          </Button>
        </ScrollLink>

        { !!education?.student_works && education.student_works.length > 0 && (
          <>
            <StudentWorkFeed studentWorks={ education.student_works } />

            <FooterPage classNameInner="hidden sm:block" classNameWrapper="justify-center hidden sm:block">
              <LinkButton
                href="https://t.me/Melnikova_foto72"
                rel="noreferrer"
                target="_blank"
                type="submit"
              >
                <span>Записаться на обучение</span>
              </LinkButton>
            </FooterPage>
          </>
        ) }
      </LayoutContent>


      <div className="block sm:hidden w-full p-5 fixed left-0 bottom-0 shadow border-t-2 z-[1000] bg-white">
        <LinkButton
          className="w-full lg:w-fit text-base"
          href="https://t.me/Melnikova_foto72"
          isNextJsLink={ false }
          rel="noreferrer"
          target="_blank"
          type="submit"
        >
          Заказать съемку
        </LinkButton>
      </div>
    </div>

  );
};

