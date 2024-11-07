import { instance, TResponseData } from "@shared/";

import { ITypePrice } from "../lib";


const allTypePricesWithVariablesQueryDocument =`
    query getTypePrices {
        typePrices {
            id
            translate
            type
        }
    }
`;

export const getTypePrices = async () => {
  const { data } = await instance.post<TResponseData<{ typePrices: ITypePrice[] }>>
  (`${process.env.NEXT_PUBLIC_API_URL}/${process.env.NEXT_PUBLIC_API_ENDPOINT}`, {
    operationName: "getTypePrices",
    query: allTypePricesWithVariablesQueryDocument,
  });


  return data;
};
