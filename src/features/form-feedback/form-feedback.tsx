"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
  Backdrop,
  Button,
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
              <SidebarRight onClickClose={ handleOnClickCloseForm } />
            </Backdrop>
          </Portal>
        ) }
      </AnimatePresence>
    </>
  );
};
