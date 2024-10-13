"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  Backdrop,
  Button,
  Input,
  Portal,
  SidebarRight,
  TextArea,
} from "@shared/";


export const FormContact = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnClickOpenForm = () => {
    setIsOpen(true);
  };

  const handleOnClickCloseForm = () => {
    setIsOpen(false);
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
                <form className="flex flex-col h-full justify-between">

                  <div className="flex flex-col gap justify-start gap-2">
                    <h1 className="text-2xl font-normal font-gabriela uppercase">Связаться со мной</h1>
                    <h2 className="text-sm font-normal font-futura-pt text-carbon/70">Заполните форму и я свяжусь с вами в ближайшее время</h2>
                  </div>

                  <div className="flex-[1_0_auto] flex flex-col justify-start gap-2 mt-9">
                    <Input label="Имя" name="name" />
                    <Input label="Телефон" name="phone" />
                    <TextArea label="Сообщение" name="message" />
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
