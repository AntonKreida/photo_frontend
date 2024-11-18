import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/";

import { getHomePage } from "../api";


export const useHomePage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.HOME],
    queryFn: getHomePage,
    placeholderData: (prev) => prev
  });


  return {
    homePage: data,
    isLoading,
    isError
  };
};
