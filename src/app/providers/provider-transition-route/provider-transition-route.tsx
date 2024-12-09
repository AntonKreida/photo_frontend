"use client";

import { animate } from "framer-motion/dom";
import { TransitionRouter } from "next-transition-router";
import { FC, ReactNode, useRef } from "react";


interface IProviderTransitionRouteProps {
    children: ReactNode;
}


export const ProviderTransitionRoute: FC<IProviderTransitionRouteProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null!);

  return (
    <TransitionRouter
      auto
      enter={ (next) => {
        animate(
          wrapperRef.current,
          { opacity: [0, 1], x: [50, 0] },
          { duration: 1,  ease: [0.43, 0.13, 0.23, 0.96], onComplete: next }
        );
      } }
      leave={ (next) => {
        animate(
          wrapperRef.current,
          { opacity: [1, 0], x: [0, 50] },
          { duration: 1, ease: [0.43, 0.13, 0.23, 0.96], onComplete: next }
        );
      } }
    >
      <div className="w-full h-full" ref={ wrapperRef }>{ children }</div>
    </TransitionRouter>
  );
};
