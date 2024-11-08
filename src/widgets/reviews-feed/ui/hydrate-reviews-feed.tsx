import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { getReviews } from "@entities/";
import { QUERY_KEYS } from "@shared/";

import { ReviewsFeed } from "./reviews-feed";


export const HydratedReviewsFeed = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.REVIEWS],
    queryFn: getReviews,
  });

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <ReviewsFeed />
    </HydrationBoundary>
  );
};
