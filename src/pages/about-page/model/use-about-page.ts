import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/";

import { getAboutPage } from "../api";


export const useAboutPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.ABOUT],
    queryFn: getAboutPage,
    placeholderData: (prev) => prev
  });

  return {
    aboutPage: data,
    isLoading,
    isError
  };
};
