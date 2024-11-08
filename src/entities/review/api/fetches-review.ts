import { instance, TResponseData } from "@shared/";

import { IReview } from "../lib";


const allReviewsWithVariablesQueryDocument =`
    query getReviews($isActiveReview: Boolean!) {
        reviews(isActiveReview: $isActiveReview) {
            id
            author
            description
            image {
                name
                url
                documentId
                width
                height
            }
        }
    }
`;

export const getReviews = async () => {
  const { data } = await instance.post<TResponseData<{ reviews: IReview[] }>>(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
    operationName: "getReviews",
    query: allReviewsWithVariablesQueryDocument,
    variables: {
      isActiveReview: true
    }
  });

  return data.data;
};
