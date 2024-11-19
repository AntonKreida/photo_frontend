import { instance, TResponseData } from "@shared/";

import { IAboutPage } from "../lib";


const withAboutQueryDocument = `
    query getAbout {
         about {
            title
            descriptions
            aboutImage {
                name
                width
                height
                url
            }
        }
    }
`;


export const getAboutPage = async () => {
  const { data } = await instance.post<TResponseData<{ about: IAboutPage }>>(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
    operationName: "getAbout",
    query: withAboutQueryDocument
  });

  return data?.data?.about;
};
