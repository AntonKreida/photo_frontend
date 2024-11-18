import { instance, TResponseData } from "@shared/";

import { ISessionPage } from "../lib";


const withSessionQueryDocument = (namePage: string) =>(`
    query getSessionsPage($documentId: ID!) {
        ${namePage}Session(documentId: $documentId) {
            documentId
            title
            sessionImages {
               documentId,
               name,
               url,
               width,
               height,
            }
        }
    }
`);


export const getSessionPage = async (namePage: string, documentId: string) => {
  const { data } =  await instance
    .post<TResponseData<{ [namePage: string]: ISessionPage }>>(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
      operationName: "getSessionsPage",
      query: withSessionQueryDocument(namePage),
      variables: {
        documentId: documentId,
      }
    });

  return data?.data[`${namePage}Session`];
};

