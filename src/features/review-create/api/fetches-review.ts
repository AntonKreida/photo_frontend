import { instance, TResponseDataMutation } from "@shared/";

import { IReviewDataForm, EntityFileImageResponse, IImgData, IImgFile } from "../lib";


const mutationCreateReview =`
    mutation CreateReview($data: ReviewInput!) {
         createReview(data: $data) {
            id
            author
            description
        }
    }
`;

const mutationUploadFileImg =`
    mutation SingleImageUpload($file: Upload!) {
        singleUploadImg(file: $file) {
            id
            name
        }
    }
`;

export const postCreateReview = async (data: IReviewDataForm, imgId?: number) => {
  const { data: response } = await instance.post(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
    operationName: "CreateReview",
    query: mutationCreateReview,
    variables: {
      data: {
        ...data,
        image: imgId,
        isActiveReview: false,
      }
    }
  });
  return response;
};

export const postUploadFile = async (data: File) => {
  const fileResponse = await new EntityFileImageResponse(data as IImgFile).formattedFileForRequest("reviews");

  const { data: response } =
    await instance.post<TResponseDataMutation<{ singleUploadImg: IImgData}>>(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
      operationName: "SingleImageUpload",
      query: mutationUploadFileImg,
      variables: {
        file: {
          ...fileResponse
        },
      },
    });

  return response;
};
