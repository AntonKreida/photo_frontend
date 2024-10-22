"use client";

import { FC, ReactNode, useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";

import { ModalWrapper } from "@shared/";


interface IModalShowGalleryProps {
    children: ({ onShowModal, onHideModal, modalActive }: {
        onShowModal: () => void;
        onHideModal: () => void;
        modalActive: boolean;
    }) => ReactNode;
}

export const ModalGallery: FC<IModalShowGalleryProps> = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);

  const onShowModal = () => setModalActive(true);
  const onHideModal = () => setModalActive(false);


  return (
    <>
      { children({ onShowModal, onHideModal, modalActive }) }
      <ModalWrapper
        handleOnCloseModal={ onHideModal }
        isOpen={ modalActive }
      >
        Я открылся
      </ModalWrapper>
    </>
  );
};
