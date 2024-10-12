"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, useEffect } from "react";

import { twClassNames } from "../../lib";


interface IBackdropProps {
  children?: ReactNode;
  zIndexString?: "z-10" | "z-50";
  onClick?: () => void;
  classesForBackdrop?: string;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Backdrop = ({
  children,
  zIndexString = "z-50",
  onClick,
  classesForBackdrop = "items-center",
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
        [zIndexString, classesForBackdrop]) }
      exit="hidden"
      initial="hidden"
      onClick={ onClick }
      variants={ backdropVariants }
    >
      { children }
    </motion.div>
  );
};

