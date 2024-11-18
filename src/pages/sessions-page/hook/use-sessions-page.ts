import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/";

import { getSessionsPage } from "../api";


interface ISessionsPageArg {
    pathname: string;
}

export const useSessionsPage = ({ pathname }: ISessionsPageArg) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.SESSIONS, pathname],
    queryFn: () => getSessionsPage(pathname as string),
    placeholderData: (prev) => prev
  });

  return {
    data,
    isLoading,
    isError,
  };
};
