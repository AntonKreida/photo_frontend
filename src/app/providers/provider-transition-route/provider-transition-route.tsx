"use client";

import { animate } from "framer-motion/dom";
import { TransitionRouter } from "next-transition-router";
import { ReactNode, useRef } from "react";


export const ProviderTransitionRoute = ({ children }: { children: ReactNode }) => {
  const wrapperRef = useRef<HTMLDivElement>(null!);

  return (
    <TransitionRouter
      auto
      enter={ (next) => {
        animate(
          wrapperRef.current,
          { opacity: [0.3, 1], filter: ["blur(12px)", "blur(0px)"] },
          { duration: 0.5, onComplete: next }
        );
      } }
      leave={ (next) => {
        animate(
          wrapperRef.current,
          { opacity: [1, 0.3], filter: ["blur(0px)", "blur(12px)"] },
          { duration: 0.5, onComplete: next }
        );
      } }
    >
      <div ref={ wrapperRef } className="w-full h-full">{ children }</div>
    </TransitionRouter>
  );
};
