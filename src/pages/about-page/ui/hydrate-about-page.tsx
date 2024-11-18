import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/";

import { getAboutPage } from "../api";
import { AboutPage } from "./about-page";


const HydrateAboutPage = async () => {
  const queryClient = new QueryClient();


  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.ABOUT],
    queryFn: getAboutPage,
  });


  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <AboutPage />
    </HydrationBoundary>
  );
};


export default HydrateAboutPage;
