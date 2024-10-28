"use client";
import { usePrices } from "@entities/";
import { FiltersPrice } from "@features/";
import { HeaderPage } from "@shared/";


const PricePage = () => {

  usePrices();

  return (
    <div className="w-full">
      <HeaderPage
        renderComponent={ () => (
          <FiltersPrice />
        ) }
        title="Прайс"
      />
    </div>
  );
};

export default PricePage;
