import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { FC } from "react";

import { getPrices } from "@entities/";
import { QUERY_KEYS } from "@shared/";

import { Prices } from "./prices";


interface IPricesListProps {
    searchParams?: { [key: string]: string };
}


export const HydratedPrices: FC<IPricesListProps> = async ({ searchParams }) => {
  const queryKeyPage = searchParams?.type || "all";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.PRICES, queryKeyPage],
    queryFn: () => getPrices(queryKeyPage),
  });

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <Prices />
    </HydrationBoundary>
  );
};
