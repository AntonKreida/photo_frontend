import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  Button,
  Input,
  SidebarRight,
  TextArea
} from "@shared/";

import { ReviewSchema, TReviewSchemaDto } from "../model";


interface IFormCreateReviewCreateProps {
    handleOnClose: () => void
}

export const FormReviewCreate: FC<IFormCreateReviewCreateProps> = ({ handleOnClose }) => {
  const { handleSubmit, control } = useForm<TReviewSchemaDto>({
    defaultValues: {
      author: "",
      description: "",
    },
    resolver: zodResolver(ReviewSchema),
    mode: "onTouched",
  });

  const handleOnSubmitFormCreateReview: SubmitHandler<TReviewSchemaDto> = (data) => {
    console.log(data);
  };

  return (
    <SidebarRight onClickClose={ handleOnClose }>
      <form className="flex flex-col h-full justify-between" onSubmit={ handleSubmit(handleOnSubmitFormCreateReview) }>

        <div className="flex flex-col gap justify-start gap-2">
          <h1 className="text-2xl font-normal font-gabriela uppercase">Оставить отзыв</h1>
          <h2 className="text-sm font-normal font-futura-pt text-carbon/70">Заполните форму и оставьте свой отзыв</h2>
        </div>

        <div className="flex-[1_0_auto] flex flex-col justify-start gap-2 mt-9">

          <Controller
            control={ control }
            name="author"
            render={ ({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                errorMessage={ error?.message }
                label="Ваше имя"
                name="author"
                onChange={ onChange }
                value={ value }
              />
            ) }
          />

          <Controller
            control={ control }
            name="description"
            render={ ({ field: { value, onChange }, fieldState: { error } }) => (
              <TextArea
                errorMessage={ error?.message }
                label="Ваш отзыв"
                name="description"
                onChange={ onChange }
                value={ value }
              />
            ) }
          />
        </div>

        <div className="flex flex-col gap-3">
          <Button
            className="w-full"
            type="submit"
          >
            Оставить отзыв
          </Button>
        </div>

      </form>
    </SidebarRight>
  );
};
