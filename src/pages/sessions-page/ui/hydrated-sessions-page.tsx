import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { headers } from "next/headers";

import { QUERY_KEYS } from "@shared/";

import { getSessionsPage } from "../api";
import { SessionsPage } from "./sessions-page";


export const HydratedSessionsPage = async () => {
  const headerList = headers();
  const pathname = headerList.get("x-current-path")?.replace(/\//gm, "");

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.SESSIONS, pathname],
    queryFn: () => getSessionsPage(pathname as string)
  });

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <SessionsPage pathname={ pathname as string } />
    </HydrationBoundary>
  );
};

export default HydratedSessionsPage;
