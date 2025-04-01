"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, useEffect } from "react";

import { twClassNames } from "../../lib";


interface IBackdropProps {
  children?: ReactNode;
  zIndexString?: string
  onClick?: () => void;
  className?: string;
}

const variantsBackdrop: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const Backdrop = ({
  children,
  zIndexString = "z-[99999]",
  onClick,
  className = "items-center",
}: IBackdropProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      animate="visible"
      className={ twClassNames("bg-black/50 fixed inset-0 flex justify-center",
        [zIndexString, className]) }
      exit="hidden"
      initial="hidden"
      onClick={ onClick }
      variants={ variantsBackdrop }
    >
      { children }
    </motion.div>
  );
};

