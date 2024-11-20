import { useQuery } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/";

import { getEducations } from "../api";


export const useEducationForSidebar = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [QUERY_KEYS.EDUCATIONS, "sidebar"],
    queryFn: getEducations,
    placeholderData: (prev) => prev
  });


  return {
    educations: data,
    isError,
    isLoading
  };
};
