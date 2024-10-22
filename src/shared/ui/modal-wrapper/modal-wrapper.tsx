import { AnimatePresence } from "framer-motion";
import { FC, ReactNode } from "react";

import { Backdrop } from "../backdrop";
import { Portal } from "../portal";


interface IModalWrapperProps {
    isOpen: boolean;
    children: ReactNode;
    handleOnClose?: () => void;
}

export const ModalWrapper: FC<IModalWrapperProps> = ({ children, isOpen, handleOnClose }) => (
  <AnimatePresence>
    { !!isOpen && (
      <Portal selector="#modal">
        <Backdrop onClick={ handleOnClose }>
          { children }
        </Backdrop>
      </Portal>
    ) }
  </AnimatePresence>
);
