import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/";

import { getHomePage } from "../api";
import { HomePage } from "./home-page";


const HydrateHomePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.HOME],
    queryFn: getHomePage,
  });


  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <HomePage />
    </HydrationBoundary>
  );
};

export default HydrateHomePage;
