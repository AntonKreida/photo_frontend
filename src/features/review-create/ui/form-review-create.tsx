import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useId, useState } from "react";
import { useDropzone } from "react-dropzone";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

import {
  Button,
  Input,
  InputImage,
  SidebarRight,
  TextArea
} from "@shared/";

import { postCreateReview, postUploadFile } from "../api";
import { ReviewSchema, TReviewSchemaDto } from "../model";


interface IFormCreateReviewCreateProps {
    handleOnClose: () => void
}

export const FormReviewCreate: FC<IFormCreateReviewCreateProps> = ({ handleOnClose }) => {
  const toastId = useId();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { isSubmitted, isValid }
  } = useForm<TReviewSchemaDto>({
    defaultValues: {
      author: "",
      description: "",
    },
    resolver: zodResolver(ReviewSchema),
    mode: "onTouched",
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/png": [],
    },
    maxFiles: 1,
  });

  const handleOnSubmitFormCreateReview: SubmitHandler<TReviewSchemaDto> = async (data) => {
    const  { toast } = await import("react-toastify");

    toast.loading("Отправляем отзыв...", {
        toastId: toastId,
        position: "bottom-left",
        closeButton: true,
        isLoading: true,
    }),

    setIsLoading(true);

    let idImgFile: number | undefined = undefined;

    if(data.image) {
      const newImg = await postUploadFile(data?.image);
      idImgFile = newImg?.data?.singleUploadImg?.id;
    }

    delete data.image;
    await postCreateReview(data, idImgFile);

    setIsLoading(false);

    toast.update(toastId, {
        position: "bottom-left",
        type: "success",
        render: "Отзыв успешно отправлен!",
        closeButton: true,
        isLoading: false,
      });

    handleOnClose();
  };

  return (
    <SidebarRight className="pt-[80px]" onClickClose={ handleOnClose }>
      <form className="flex flex-col h-full justify-between" onSubmit={ handleSubmit(handleOnSubmitFormCreateReview) }>

        <div className="flex flex-col gap justify-start gap-2">
          <h1 className="text-2xl font-normal font-gabriela uppercase">Оставить отзыв</h1>
          <h2 className="text-sm font-normal font-futura-pt text-carbon/70">Заполните форму и оставьте свой отзыв</h2>
        </div>

        <div className="flex-[1_0_auto] flex flex-col justify-start gap-2 mt-9">

          <Controller
            control={ control }
            name="image"
            render={ ({ field: { onChange, value }, fieldState: { error } }) => (
              <InputImage
                errorMessage={ error?.message }
                getInputProps={ getInputProps }
                getRootProps={ getRootProps }
                label="Ваше фотография"
                name="image"
                onChange={ onChange }
                value={ value }
                disabled={ isLoading }
              />
            ) }
          />

          <Controller
            control={ control }
            name="author"
            render={ ({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                disabled={ isLoading }
                errorMessage={ error?.message }
                label="Ваше имя"
                name="author"
                onChange={ onChange }
                required
                value={ value }
              />
            ) }
          />

          <Controller
            control={ control }
            name="description"
            render={ ({ field: { value, onChange }, fieldState: { error } }) => (
              <TextArea
                disabled={ isLoading }
                errorMessage={ error?.message }
                label="Ваш отзыв"
                name="description"
                onChange={ onChange }
                required
                value={ value }
              />
            ) }
          />
        </div>

        <div className="flex flex-col gap-3">
          <Button
            className="w-full"
            disabled={ isSubmitted || !isValid || isLoading }
            type="submit"
          >
            Оставить отзыв
          </Button>
        </div>

      </form>
    </SidebarRight>
  );
};
