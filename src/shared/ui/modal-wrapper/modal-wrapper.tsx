import { XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence } from "framer-motion";
import { FC, ReactNode } from "react";

import { Backdrop } from "../backdrop";
import { Portal } from "../portal";


interface IModalWrapperProps {
    isOpen: boolean;
    children: ReactNode;
    handleOnCloseModal?: () => void;
}

export const ModalWrapper: FC<IModalWrapperProps> = ({ children, isOpen,  handleOnCloseModal }) => (
  <AnimatePresence>
    { !!isOpen && (
      <Portal selector="#modal">
        <Backdrop onClick={ handleOnCloseModal }>
          <div
            className="w-2/5 h-fit bg-white rounded-sm overflow-hidden relative"
            onClick={ (event) => event.stopPropagation() }
          >
            { !!handleOnCloseModal
              && (
                <XMarkIcon
                  className="w-6 h-6 active:scale-[0.8] transition-[transform] absolute top-2 right-4 cursor-pointer"
                  onClick={ handleOnCloseModal }
                />
              ) }
            <div className="w-full h-full px-4 py-3">
              { children }
            </div>
          </div>
        </Backdrop>
      </Portal>
    ) }
  </AnimatePresence>
);
