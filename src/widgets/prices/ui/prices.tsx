"use client";

import { Price, usePrices } from "@entities/";


export const Prices = () => {
  const { pricesResponseData } = usePrices();

  return (
    <ul className="mt-[78px] grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-10">
      { pricesResponseData?.data.prices.map((price) => (
        <li key={ price.id }>
          <Price price={ price } />
        </li>
      )) }
    </ul>
  );
};
