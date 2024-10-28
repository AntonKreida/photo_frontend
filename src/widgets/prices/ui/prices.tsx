"use client";

import { usePrices } from "@entities/";


export const Prices = () => {
  const { prices } = usePrices();


  console.log(prices);

  return (
    <div>asd</div>
  );
};
