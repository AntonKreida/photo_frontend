"use client";

import { useMemo } from "react";

import { Price, usePrices, useTypePrices } from "@entities/";


export const Prices = () => {
  const { typePrices } = useTypePrices();

  const memoListTypePrices = useMemo(() =>
    typePrices.map((typePrice) => typePrice.type),
  [typePrices]);

  const { prices } = usePrices({ filterList: memoListTypePrices });

  return (
    prices.length > 0
      ? (
        <ul className="mt-[78px] grid sm:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-10">
          { prices.map((price) => (
            <li key={ price?.id }>
              <Price price={ price } />
            </li>
          )) }
        </ul>
      )
      : (
        <div className="flex w-full h-full flex-col justify-center items-center">
          <div className="text-carbon/50 text-xl font-normal font-futura-pt text-center">
            На данный момент прайс временно пустой
          </div>
        </div>
      )
  );
};
