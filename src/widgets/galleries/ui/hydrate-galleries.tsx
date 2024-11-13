import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { FC } from "react";

import { getGalleries } from "@entities/";
import { QUERY_KEYS } from "@shared/";

import { Galleries } from "./galleries";


interface IGalleriesProps {
    pathname: string
}


export const HydratedGalleries: FC<IGalleriesProps> = async ({ pathname }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.GALLERY, pathname],
    queryFn: () => getGalleries(pathname),
  });

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <Galleries pathname={ pathname } />
    </HydrationBoundary>
  );
};
