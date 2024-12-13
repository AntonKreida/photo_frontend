import { FC } from "react";

import { LinkButton } from "@shared/";

import { IPrice } from "../lib";


interface IPriceProps {
    price: IPrice
}

const intlNumberFormat = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
  currency: "RUB",
});


export const Price: FC<IPriceProps> = ({ price }) => (
  <div className="w-full flex flex-col justify-between h-full">
    <div className="flex justify-between w-full pb-4 border-b border-beluga">
      <span className="text-carbon text-2xl font-normal font-gabriela">{ price?.title }</span>
    </div>
    <div
      className="[&>ol]:text-carbon [&>ol]:font-futura-pt [&>ol]:font-normal mt-4 mb-[30px]
        [&>ol]:text-xl [&>ol]:list-none [&>ol>li]:before:content-['-'] [&>ol>li]:before:mr-2
        [&>ul]:font-normal [&>ul]:text-carbon [&>ul]:font-futura-pt
        [&>ul]:text-xl [&>ul]:list-none [&>ul>li]:before:content-['-'] [&>ul>li]:before:mr-2"
      dangerouslySetInnerHTML={{ __html: price?.description }}
    />

    <div className="flex flex-col gap-4 mt-auto">
      <div className="text-carbon/50 text-base font-normal font-futura-pt">
        У меня есть слаженная команда из специалистов стилиста и визажиста, которых я рекомендую
        и координирую по задачам съемки. Их услуги и аренда студии оплачиваются отдельно.
      </div>

      <div className="flex gap-2 items-center text-carbon font-gabriela text-lg font-normal">
        <span>Стоимость:</span>
        <span>{ intlNumberFormat.format(price?.cost) }</span>
      </div>

      <LinkButton
        className="lg:p-3"
        href="https://t.me/Melnikova_foto72"
        isNextJsLink={ false }
        target="_blank"
        type="submit"
      >
        Связаться со мной
      </LinkButton>
    </div>
  </div>
);
