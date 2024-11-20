import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/";

import { Sidebar } from "./sidebar";
import { getEducations } from "../api";


const HydratedSidebar = async () => {
  const queryClient = new QueryClient();


  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.EDUCATIONS, "sidebar"],
    queryFn: getEducations,
  });

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <Sidebar />
    </HydrationBoundary>
  );
};

export default HydratedSidebar;
