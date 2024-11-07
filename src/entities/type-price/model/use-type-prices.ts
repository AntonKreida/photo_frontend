"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/";

import { getTypePrices } from "../api";


export const useTypePrices = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.TYPE_PRICES],
    queryFn: getTypePrices,
    placeholderData: (prev) => prev
  });


  return {
    typePricesResponseData: data?.data,
    isLoading,
    isError
  };
};
