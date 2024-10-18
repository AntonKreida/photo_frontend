"use client";

import { Button } from "@shared/ui/button";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";


interface IButtonBackProps {
    children: ReactNode;
    className?: string;
}

export const ButtonBack: FC<IButtonBackProps> = ({ children, className }) => {
    const route = useRouter();

    const handleBack = () => {
        route.back();
    }

    return (
        <Button
            className={ className }
            onClick={ handleBack }
        >
            { children }
        </Button>
    )
}
