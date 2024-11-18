"use client";

import { FC, Ref } from "react";

import { AdapterImage, twClassNames } from "@shared/";

import { ISessionCard } from "../lib";


interface ISessionCardProps {
    sessionCard: ISessionCard;
    className?: string;
    actionCard?: (card: ISessionCard) => void;
    innerRef?: Ref<HTMLDivElement>;
}

export const SessionCard: FC<ISessionCardProps> = ({
  className,
  sessionCard,
  actionCard,
  innerRef,
}) => (
  <div
    className={ twClassNames("col-span-4 rounded overflow-hidden", {
      "cursor-pointer hover:scale-105 transition-[transform] hover:z-10": !!actionCard
    }, [className]) }
    onClick={ () => actionCard?.(sessionCard) }
    ref={ innerRef }
  >
    <AdapterImage
      alt={ sessionCard.name }
      classNameWrapper="w-full h-full"
      height={ sessionCard.height }
      priority
      quality={ 100 }
      src={ `${ process.env.NEXT_PUBLIC_API_URL }${ sessionCard.url }` }
      width={ sessionCard.width }
    />
  </div>
);
