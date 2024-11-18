import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/";

import { getSessionPage } from "../api";


export const useSessionPage = (pathname: string, documentId: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.SESSIONS, pathname, documentId],
    queryFn: () => getSessionPage(pathname, documentId),
    placeholderData: (prev) => prev,
  });


  return {
    sessionPage: data,
    isLoading,
    isError
  };
};
