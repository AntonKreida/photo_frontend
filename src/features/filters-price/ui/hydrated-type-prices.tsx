import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import dynamic from "next/dynamic";


import { getTypePrices } from "@entities/";
import { QUERY_KEYS } from "@shared/";

import { SkeletonFilterItem } from "./skeleton-filter-item";


const DynamicFiltersPrice = dynamic(() => import("./filters-price").then((module) => module.FiltersPrice),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center w-full lg:w-fit basis-1/2 lg:justify-end">
        { Array.from({ length: 3 }).map((_, index) => <SkeletonFilterItem key={ index } />) }
      </div>
    ),
  });

export const HydratedTypePrices = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.TYPE_PRICES],
    queryFn: getTypePrices,
  });

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <DynamicFiltersPrice />
    </HydrationBoundary>
  );
};
