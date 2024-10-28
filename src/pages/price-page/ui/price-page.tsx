import { ENUM_PRICE_TYPE } from "@entities/";
import { FiltersPrice } from "@features/";
import { HeaderPage } from "@shared/";
import { Prices } from "@widgets/";

import { HydratedPrices } from "./hydrate-prices";


const PricePage = ({
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
      <Prices />
    </HydratedPrices>
  </div>
);

export default PricePage;
