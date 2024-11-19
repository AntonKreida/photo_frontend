import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion, Variants } from "framer-motion";
import { FC, ReactNode } from "react";

import { twClassNames } from "@shared/lib";


const variants: Variants = {
  visible: { x: 0 },
  hidden: { x: 500 },
};


interface ISidebarRightProps {
    onClickClose?: () => void
    children?: ReactNode;
    className?: string;
}

export const SidebarRight: FC<ISidebarRightProps> = ( { children, onClickClose, className }) => (
  <motion.div
    animate="visible"
    className="w-[359px] h-full bg-white relative right-0 top-0"
    initial="hidden"
    transition={{ duration: 0.5 }}
    variants={ variants }
  >
    <div className={ twClassNames("pt-[130px] px-[30px] pb-[70px] h-full w-full", [className]) }>
      { !!onClickClose && (
        <XMarkIcon
          className="w-8 h-8 absolute top-[30px] right-[30px] cursor-pointer active:scale-[0.9] transition-[transform]"
          onMouseDown={ onClickClose }
        />
      ) }
      { children }
    </div>
  </motion.div>
);
