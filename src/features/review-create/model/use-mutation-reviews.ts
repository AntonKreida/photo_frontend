import { useMutation, useQueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@shared/";

import { postCreateReview } from "../api";
import { IReviewDataForm } from "../lib";


interface IVariablesMutationReviewCreate {
    dataForm: IReviewDataForm;
}


export const useMutationReviews = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async ({ dataForm }: IVariablesMutationReviewCreate) => {
      await postCreateReview(dataForm);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.REVIEWS] });
    }
  });

  return {
    createReview: mutate,
    isLoading: isPending,
    isSuccess,
  };
};
