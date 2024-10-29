"use client";

import { Price, usePrices } from "@entities/";


export const Prices = () => {
  const { pricesResponseData } = usePrices();

  console.log(pricesResponseData);

  return (
    <ul className="mt-[78px]">
      { pricesResponseData?.data.prices.map((price) => (
        <li key={ price.id }>
          <Price price={ price } />
        </li>
      )) }
    </ul>
  );
};
