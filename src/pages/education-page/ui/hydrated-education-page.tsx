import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { FC } from "react";

import { QUERY_KEYS } from "@shared/";

import { getEducation } from "../api";
import { EducationPage } from "./education-page";


interface IHydratedEducationPageProps {
    params: {
        id: string
    }
}


const HydratedEducationPage: FC<IHydratedEducationPageProps> = async ({ params }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEYS.EDUCATIONS, params.id],
    queryFn: () => getEducation(params.id),
  });

  return (
    <HydrationBoundary state={ dehydrate(queryClient) }>
      <EducationPage documentId={ params.id } />
    </HydrationBoundary>
  );
};

export default HydratedEducationPage;
