import { ENUM_PRICE_TYPE } from "@entities/";
import { FiltersPrice } from "@features/";
import { HeaderPage } from "@shared/";

import { HydratedPrices } from "./hydrate-prices";


const PricePage = async ({
  searchParams,
} : {
  searchParams?: { [key: string]: ENUM_PRICE_TYPE[keyof ENUM_PRICE_TYPE] | undefined };
}) => (
  <div className="w-full">
    <HeaderPage
      renderComponent={ () => (
        <FiltersPrice />
      ) }
      title="Прайс"
    />

    <HydratedPrices searchParams={ searchParams ?? {} }>
      <div></div>
    </HydratedPrices>
  </div>
);

export default PricePage;
