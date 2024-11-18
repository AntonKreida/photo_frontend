import { instance, TResponseData } from "@shared/";

import { ISessionsPage } from "../lib";


const withSessionQueryDocument = (namePage: string) => (`
        query getSessionsPage {
            ${namePage} {
                titlePage,
                subTitlePage
            }
        }
    `);

export const getSessionsPage = async (namePage: string) => {
  const { data } =  await instance
    .post<TResponseData<{ [namePage: string]: ISessionsPage }>>(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
      operationName: "getSessionsPage",
      query: withSessionQueryDocument(namePage),
    });

  return data?.data[namePage];
};
