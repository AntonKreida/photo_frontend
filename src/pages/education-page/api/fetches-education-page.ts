import { instance, TResponseData } from "@shared/";

import { IEducation } from "../lib";


const withEducationQueryDocument = `
    query getEducation($documentId: ID!) {
        education(documentId: $documentId) {
            documentId
            title
            subTitle
        }
    }
`;

export const getEducation = async (documentId: string) => {
  const { data } = await instance.post<TResponseData<{ education: IEducation }>>(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
    operationName: "getEducation",
    query:  withEducationQueryDocument,
    variables: {
      documentId: documentId,
    }
  });

  return data.data.education;
};
