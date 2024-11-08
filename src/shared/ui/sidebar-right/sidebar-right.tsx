import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion, Variants } from "framer-motion";
import { FC, ReactNode } from "react";


const variants: Variants = {
  visible: { x: 0 },
  hidden: { x: 500 },
};


interface ISidebarRightProps {
    onClickClose?: () => void
    children?: ReactNode;
}

export const SidebarRight: FC<ISidebarRightProps> = ( { children, onClickClose }) => (
  <motion.div
    animate="visible"
    className="w-[359px] h-full bg-white relative right-0 top-0"
    initial="hidden"
    transition={{ duration: 0.5 }}
    variants={ variants }
  >
    <div className="pt-[130px] px-[30px] pb-[70px] h-full w-full">
      { !!onClickClose && (
        <XMarkIcon
          className="w-8 h-8 absolute top-[30px] right-[30px] cursor-pointer active:scale-[0.8] transition-[transform]"
          onClick={ onClickClose }
        />
      ) }
      { children }
    </div>
  </motion.div>
);
