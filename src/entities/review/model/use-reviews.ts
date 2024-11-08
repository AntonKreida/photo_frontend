"use client";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/";

import { getReviews } from "../api";


export const useReviews = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.REVIEWS],
    queryFn: getReviews,
    placeholderData: (prev) => prev
  });


  return {
    reviews: data?.reviews ?? [],
    isLoading,
    isError
  };
};
