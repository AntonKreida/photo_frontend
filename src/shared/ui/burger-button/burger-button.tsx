import { HTMLMotionProps, motion, MotionConfig  } from "framer-motion";
import { FC } from "react";

import { twClassNames } from "@shared/";


interface IBurgerButtonProps extends  HTMLMotionProps<"button"> {
    isActive: boolean;
    className?: string
}

export const BurgerButton: FC<IBurgerButtonProps> = ({
  className, onClick, isActive, ...props
}) => (
  <MotionConfig
    transition={{
      duration: 0.35,
      ease: "easeInOut",
    }}
  >
    <motion.button
      animate={ isActive
        ? "active"
        : "rest" }
      className={ twClassNames(`relative w-20 h-20 rounded-full bg-white/0
        transition-colors`, [className]) }
      initial={ false }
      onClick={ onClick }
      { ...props }
    >
      <motion.span
        className="absolute h-[2px] w-10 bg-carbon rounded-full"
        style={{
          left: "50%",
          top: "35%",
          x: "-50%",
          y: "-50%",
        }}
        variants={{
          active: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
          },
          rest: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
          }
        }}
      />
      <motion.span
        className="absolute h-[2px] w-10 bg-carbon rounded-full"
        style={{
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
        }}
        variants={{
          active: {
            rotate: ["0deg", "0deg", "-45deg"],
          },
          rest: {
            rotate: ["-45deg", "0deg", "0deg"],
          }
        }}
      />
      <motion.span
        className="absolute h-[2px] w-10 bg-carbon rounded-full"
        style={{
          left: "50%",
          bottom: "35%",
          x: "-50%",
          y: "50%",
        }}
        variants={{
          active: {
            width: ["2.5rem", "1.5rem", "0"],
          },
          rest: {
            width: ["0", "1.5rem", "2.5rem"],
          }
        }}
      />
    </motion.button>
  </MotionConfig>
);
