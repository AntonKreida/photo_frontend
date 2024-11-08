import { FC } from "react";

import { HydratedTypePrices } from "@features/";
import { HeaderPage } from "@shared/";
import { HydratedPrices } from "@widgets/";


interface IPricePageProps {
    searchParams?: { [key: string]: string };
}


const PricePage: FC<IPricePageProps> = ({ searchParams }) => (
  <div className="w-full h-full">
    <HeaderPage
      renderComponent={ () => (
        <HydratedTypePrices />
      ) }
      title="Прайс"
    />

    <HydratedPrices searchParams={ searchParams } />
  </div>
);

export default PricePage;
