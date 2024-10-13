"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  Backdrop,
  Button,
  Input,
  Portal,
  SidebarRight,
} from "@shared/";


export const FormFeedback = () => {
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
                <Input label="Ваше имя" name="name" />
              </SidebarRight>
            </Backdrop>
          </Portal>
        ) }
      </AnimatePresence>
    </>
  );
};
