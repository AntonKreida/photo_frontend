"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import {
  Backdrop,
  Button,
  Input,
  InputPhone,
  Portal,
  SidebarRight,
  TextArea,
} from "@shared/";

import { ContactSchema, TContactSchemaDto } from "./model";


export const FormContact = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { control, handleSubmit } = useForm<TContactSchemaDto>({
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
    resolver: zodResolver(ContactSchema),
    mode: "onTouched",
  });

  const handleOnClickOpenForm = () => {
    setIsOpen(true);
  };

  const handleOnClickCloseForm = () => {
    setIsOpen(false);
  };

  const handleOnSubmitForm: SubmitHandler<TContactSchemaDto> = (data) => {
    console.log(data);
  };

  return (
    <>
      <Button onClick={ handleOnClickOpenForm }>
        Связаться со мной
      </Button>
      <AnimatePresence mode="wait">
        { !!isOpen && (
          <Portal selector="#modal">
            <Backdrop className="justify-end">
              <SidebarRight onClickClose={ handleOnClickCloseForm }>
                <form className="flex flex-col h-full justify-between" onSubmit={ handleSubmit(handleOnSubmitForm) }>

                  <div className="flex flex-col gap justify-start gap-2">
                    <h1 className="text-2xl font-normal font-gabriela uppercase">Связаться со мной</h1>
                    <h2 className="text-sm font-normal font-futura-pt text-carbon/70">Заполните форму и я свяжусь с вами в ближайшее время</h2>
                  </div>

                  <div className="flex-[1_0_auto] flex flex-col justify-start gap-2 mt-9">

                    <Controller
                      control={ control }
                      name="name"
                      render={ ({ field: { value, onChange }, fieldState: { error } }) => (
                        <Input
                          errorMessage={ error?.message }
                          label="Имя"
                          name="name"
                          onChange={ onChange }
                          value={ value }
                        />
                      ) }
                    />

                    <Controller
                      control={ control }
                      name="phone"
                      render={ ({ field: { value, onChange }, fieldState: { error } }) => (
                        <InputPhone
                          allowEmptyFormatting
                          errorMessage={ error?.message }
                          format="+7 (###) ###-##-##"
                          label="Номер телефона"
                          mask="_"
                          name="phone"
                          onChange={ onChange }
                          value={ value }
                        />
                      ) }
                    />

                    <Controller
                      control={ control }
                      name="message"
                      render={ ({ field: { value, onChange }, fieldState: { error } }) => (
                        <TextArea
                          errorMessage={ error?.message }
                          label="Сообщение"
                          name="message"
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
                      Отправить
                    </Button>
                  </div>
                </form>
              </SidebarRight>
            </Backdrop>
          </Portal>
        ) }
      </AnimatePresence>
    </>
  );
};
