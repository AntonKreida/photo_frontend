import { instance } from "@shared/";

import { IReviewDataForm } from "../lib";


const mutationCreateReview = `
    mutation createReview($data: ReviewCreateInput!) {
         createReview(data: $data) {
            id
            author
            description
        }
    }
`;

export const postCreateReview = async (data: IReviewDataForm) => {
  const { data: response } = await instance.post(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
    operationName: "createReview",
    query: mutationCreateReview,
    variables: {
      ...data,
      isActiveReview: false
    }
  });
  return response;
};
