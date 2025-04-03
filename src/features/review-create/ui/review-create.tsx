"use client";

import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { MouseEvent, useState } from "react";

import { Backdrop, Button, Portal } from "@shared/";


const WithLazyLoadingFormReviewCreate = dynamic(() => import("./form-review-create").then((mod) => mod.FormReviewCreate));
const WithLazyLoadingToastContainer = dynamic(() => import("react-toastify").then((mod) => mod.ToastContainer));


export const ReviewCreate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenForm = () => {
    setIsOpen(true);
  };

  const handleOnIsCloseForm = (event?: MouseEvent<HTMLDivElement | SVGSVGElement>) => {
    event?.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      <Button onMouseDown={ handleIsOpenForm } type="submit">
        Оставить отзыв
      </Button>
      <AnimatePresence mode="wait">
        { !!isOpen && (
          <Portal selector="#modal">
            <Backdrop className="justify-end" onClick={ handleOnIsCloseForm }>
              <WithLazyLoadingFormReviewCreate handleOnClose={ handleOnIsCloseForm } />
            </Backdrop>
          </Portal>
        ) }
      </AnimatePresence>
      <WithLazyLoadingToastContainer  />
    </>
  );
};
