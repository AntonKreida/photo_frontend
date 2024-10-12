"use client";

import React, { FC, useEffect, useState } from "react";
import ReactDom from "react-dom";


interface IPortalProps {
  children: React.ReactNode;
  selector: string;
}

export const Portal: FC<IPortalProps> = ({ children, selector }) => {
  const [container, setContainer] = useState<HTMLDivElement>();

  useEffect(() => {
    setContainer(document.createElement("div"));
  }, []);

  useEffect(() => {
    if (container) {
      document.querySelector(selector)?.appendChild(container);

      return () => {
        document.querySelector(selector)?.removeChild(container);
      };
    }
  }, [container, selector]);

  return container
    ? ReactDom.createPortal(children, container)
    : null;
};
