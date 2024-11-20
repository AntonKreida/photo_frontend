import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/";

import { getEducation } from "../api";


export const useEducation = (documentId: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.EDUCATIONS, documentId],
    queryFn: () => getEducation(documentId),
    placeholderData: (prev) => prev
  });


  return {
    education: data,
    isLoading,
    isError
  };
};
