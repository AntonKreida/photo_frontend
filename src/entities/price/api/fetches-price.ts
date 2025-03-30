import { instance, TResponseData } from "@shared/";

import { IPrice } from "../lib";


const allPricesWithVariablesQueryDocument =`
    query getPrices($type: String, $sort: Sort) {
        prices(type: $type, sortArgs: { cost: $sort }) {
            id
            title
            description
            subDescription
            cost
        }
    }
`;


export const getPrices = async (typePrice: string) => {
  const { data } =  await instance.post<TResponseData<{ prices: IPrice[] }>>(`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
    operationName: "getPrices",
    variables: {
      type: typePrice,
      sort: "asc"
    },
    query: allPricesWithVariablesQueryDocument,
  });

  return data?.data;
};


