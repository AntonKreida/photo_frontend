"use client";

import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useState } from "react";

import { Backdrop, Button, Portal } from "@shared/";


const WithLazyLoadingFormReviewCreate = dynamic(() => import("./form-review-create").then((mod) => mod.FormReviewCreate));


export const ReviewCreate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenForm = () => {
    setIsOpen(true);
  };

  const handleOnIsCloseForm = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={ handleIsOpenForm }>
        Оставить отзыв
      </Button>
      <AnimatePresence mode="wait">
        { !!isOpen && (
          <Portal selector="#modal">
            <Backdrop className="justify-end">
              <WithLazyLoadingFormReviewCreate handleOnClose={ handleOnIsCloseForm } />
            </Backdrop>
          </Portal>
        ) }
      </AnimatePresence>
    </>
  );
};
