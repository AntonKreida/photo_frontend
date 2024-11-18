import { XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence } from "framer-motion";
import { FC, ReactNode } from "react";

import { twClassNames } from "../../lib";
import { Backdrop } from "../backdrop";
import { Portal } from "../portal";


interface IModalWrapperProps {
    isOpen: boolean;
    children: ReactNode;
    handleOnCloseModal?: () => void;
    className?: string;
    classNameInner?: string;
}

export const ModalWrapper: FC<IModalWrapperProps> = ({
  children,
  isOpen,
  handleOnCloseModal,
  className,
  classNameInner,
}) => (
  <AnimatePresence>
    { !!isOpen && (
      <Portal selector="#modal">
        <Backdrop onClick={ handleOnCloseModal }>
          <div
            className={ twClassNames("max-w-[50%] w-full h-fit bg-white rounded-sm overflow-hidden relative", [className]) }
            onClick={ (event) => event.stopPropagation() }
          >
            { !!handleOnCloseModal
              && (
                <XMarkIcon
                  className="w-8 h-8 active:scale-[0.8] transition-[transform] absolute top-1 right-2 cursor-pointer z-10"
                  onClick={ handleOnCloseModal }
                />
              ) }
            <div className={ twClassNames("w-full h-full px-10 py-8", [classNameInner]) }>
              { children }
            </div>
          </div>
        </Backdrop>
      </Portal>
    ) }
  </AnimatePresence>
);
