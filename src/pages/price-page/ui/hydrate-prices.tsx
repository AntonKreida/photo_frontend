import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

import { ENUM_PRICE_TYPE, getPrices } from "@entities/";
import { QUERY_KEYS } from "@shared/";


interface IPricesListProps {
    searchParams?: { [key: string]: ENUM_PRICE_TYPE[keyof ENUM_PRICE_TYPE] };
    children: ReactNode;
}


export const HydratedPrices: FC<IPricesListProps> = async ({ searchParams, children }) => {
  const queryKeyPage = searchParams?.type || "personal";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.PRICES, queryKeyPage],
    queryFn: () => getPrices(queryKeyPage),
  });

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      { children }
    </HydrationBoundary>
  );
};
