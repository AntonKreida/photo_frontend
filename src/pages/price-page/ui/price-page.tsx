import { FC } from "react";

import { ENUM_PRICE_TYPE } from "@entities/";
import { FiltersPrice } from "@features/";
import { HeaderPage } from "@shared/";
import { Prices } from "@widgets/";

import { HydratedPrices } from "./hydrate-prices";


interface IPricePageProps {
    searchParams?: { [key: string]: ENUM_PRICE_TYPE[keyof ENUM_PRICE_TYPE] };
}


const PricePage: FC<IPricePageProps> = ({ searchParams }) => (
  <div className="w-full">
    <HeaderPage
      renderComponent={ () => (
        <FiltersPrice />
      ) }
      title="Прайс"
    />

    <HydratedPrices searchParams={ searchParams }>
      <Prices />
    </HydratedPrices>
  </div>
);

export default PricePage;
