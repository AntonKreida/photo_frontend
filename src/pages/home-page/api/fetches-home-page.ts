import { instance, TResponseData } from "@shared/";

import { IHomePage } from "../lib";


const withHomePageQueryDocument = `
    query getHome {
        homePage {
            title
            subTitle
            sliders {
                documentId
                title
                url
                sliderImage {
                    name
                    width
                    height
                    url
                }
            }
        }
    }
`;

export const getHomePage = async () => {
  const { data } = await instance.post<TResponseData<{ homePage: IHomePage }>>(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
    operationName: "getHome",
    query: withHomePageQueryDocument
  });

  return data?.data.homePage;
};
