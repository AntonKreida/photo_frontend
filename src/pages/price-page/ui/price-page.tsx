import { HeaderPage } from "@shared/";

import { FiltersPrice } from "/src/features/filters-price/ui";


const PricePage = () => (
  <div className="w-full">
    <HeaderPage
      renderComponent={ () => (
        <FiltersPrice />
      ) }
      title="Прайс"
    />
  </div>
);

export default PricePage;
