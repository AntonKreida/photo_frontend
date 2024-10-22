"use client";

import { FC, ReactNode, useState } from "react";


interface IModalShowGalleryProps {
    children: ({ onShow, onHide, dialogActive }: {
        onShow: () => void;
        onHide: () => void;
        dialogActive: boolean;
    }) => ReactNode;
}

export const ModalShowGallery: FC<IModalShowGalleryProps> = ({ children }) => {
  const [dialogActive, setDialogActive] = useState(false);

  const onShow = () => setDialogActive(true);
  const onHide = () => setDialogActive(false);


  return (
    children({ onShow, onHide, dialogActive })
  );
};
