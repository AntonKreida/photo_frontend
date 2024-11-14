import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/";

import { getGalleries } from "../api";


export const useGalleries = (pathname: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.GALLERY, pathname],
    queryFn: () => getGalleries(pathname),
    placeholderData: (prev) => prev,
  });


  return {
    galleries: data ?? [],
    isLoading,
    isError
  };
};
