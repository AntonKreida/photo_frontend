import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { headers } from "next/headers";
import { FC } from "react";

import { QUERY_KEYS } from "@shared/";

import { getSessionPage } from "../api";
import { SessionPage } from "./session-page";


interface IHydratedSessionPageProps {
    params: {
        "id": string
    }
}


const HydratedSessionPage: FC<IHydratedSessionPageProps> = async ({ params }) => {
  const headerList = headers();
  const pathname = headerList.get("x-current-path")?.split("/").splice(1).slice(0, -1).join("/");

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.SESSIONS, pathname, params["id"]],
    queryFn: () =>  getSessionPage(pathname as string, params["id"]),
  });

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <SessionPage individualId={ params["id"] } pathname={ pathname as string } />
    </HydrationBoundary>
  );
};

export default HydratedSessionPage;
