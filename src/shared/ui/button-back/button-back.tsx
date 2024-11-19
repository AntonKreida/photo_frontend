"use client";

import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";

import { Button } from "@shared/ui/button";


interface IButtonBackProps {
    children: ReactNode;
    className?: string;
}

export const ButtonBack: FC<IButtonBackProps> = ({ children, className }) => {
  const route = useRouter();

  const handleBack = () => {
    route.back();
  };

  return (
    <Button
      className={ className }
      onMouseDown={ handleBack }
    >
      { children }
    </Button>
  );
};
