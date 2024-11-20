import { instance, TResponseData } from "@shared/";

import { IEducation } from "../lib";


const withEducationQueryDocument = `
    query getEducation($documentId: ID!) {
        education(documentId: $documentId) {
            documentId
            title
            subTitle
            price
            description
            titleImage {
                name
                url
                width
                height
                alternativeText
            }
            student_works {
                documentId
                title
                workImage {
                    name
                    url
                    width
                    height
                    alternativeText
                }
            }
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
