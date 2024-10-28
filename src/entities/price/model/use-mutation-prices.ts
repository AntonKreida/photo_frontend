import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { QUERY_KEYS } from "@shared/";

import { getPrices } from "../api";
import { ENUM_PRICE_TYPE } from "../lib";


interface IVariablesMutationPrices {
    typePrice: ENUM_PRICE_TYPE[keyof ENUM_PRICE_TYPE];
}

export const useMutationPrices = () => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ typePrice }: IVariablesMutationPrices) => {
      await getPrices(searchParams?.get("type") || typePrice);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PRICES] });
    },
  });

  return {
    changePrices: mutate,
    isLoading: isPending,
  };
};
