import { FC } from "react";

import { IPrice } from "../lib";


interface IPriceProps {
    price: IPrice
}

const intlNumberFormat = new Intl.NumberFormat("ru-RU", {
  style: "decimal",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
  currency: "RUB",
});


export const Price: FC<IPriceProps> = ({
  price
}) => (
  <div className="w-full flex flex-col">
    <div className="flex justify-between w-full pb-4 border-b border-beluga">
      <span className="text-carbon text-2xl font-normal font-gabriela">{ price.title }</span>
      <span className="text-carbon font-gabriela text-xl font-normal">{ intlNumberFormat.format(price.count) }</span>
    </div>
  </div>
);
