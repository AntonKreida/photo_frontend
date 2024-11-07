import { instance, TResponseData } from "@shared/";

import { IPrice } from "../lib";


const allPricesWithVariablesQueryDocument =`
    query getPrices($type: String) {
        prices(type: $type) {
            id
            title
            description
            cost
        }
    }
`;


export const getPrices = async (typePrice: string) => {
  const { data } =  await instance.post<TResponseData<{ prices: IPrice[] }>>(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
    operationName: "getPrices",
    variables: {
      type: typePrice
    },
    query: allPricesWithVariablesQueryDocument,
  });

  return data;
};


