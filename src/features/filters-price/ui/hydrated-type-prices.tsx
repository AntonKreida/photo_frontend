import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { getTypePrices } from "@entities/";
import { QUERY_KEYS } from "@shared/";

import { FiltersPrice } from "./filters-price";


export const HydratedTypePrices = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.TYPE_PRICES],
    queryFn: getTypePrices,
  });

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <FiltersPrice />
    </HydrationBoundary>
  );
};
