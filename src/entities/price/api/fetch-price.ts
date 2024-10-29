import { instance, TResponseData } from "@shared/";

import { ENUM_PRICE_TYPE, IPrice } from "../lib";


const allPricesWithVariablesQueryDocument =`
    query getPrices($type: ENUM_PRICE_TYPE) {
        prices(type: $type) {
            id
            title
            description
            count
        }
    }
`;


export const getPrices = async (typePrice: ENUM_PRICE_TYPE[keyof ENUM_PRICE_TYPE]) => {
  const { data } =  await instance.post<TResponseData<{ prices: IPrice[] }>>(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
    operationName: "getPrices",
    variables: {
      type: typePrice
    },
    query: allPricesWithVariablesQueryDocument,
  });

  return data;
};


