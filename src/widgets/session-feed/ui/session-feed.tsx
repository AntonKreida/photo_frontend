"use client";

import { FC } from "react";

import { ISessionCard, SessionCard } from "@entities/";
import { ModalGallery } from "@features/";


interface ISessionFeedProps {
    sessionCards: ISessionCard[];
}

export const SessionFeed: FC<ISessionFeedProps> = ({ sessionCards }) => (
  <div className={ `w-full mt-[90px] grid grid-cols-12 gap-[2px]
                [&>*:nth-child(9n-8)]:col-span-8 [&>*:nth-child(9n-8)]:row-span-2
                [&>*:nth-child(9n-1)]:col-span-8 [&>*:nth-child(9n-1)]:row-span-2
                [&>*:nth-last-child(1):nth-child(9n-1)]:col-span-6
                [&>*:nth-last-child(2):nth-child(9n-2)]:col-span-6
                [&>*:nth-last-child(3):nth-child(9n-4)]:row-span-2
                [&>*:nth-last-child(2):nth-child(9n-3)]:row-span-2
                [&>*:nth-last-child(1):nth-child(9n-4)]:col-span-6
                [&>*:nth-last-child(2):nth-child(9n-5)]:col-span-6
                [&>*:nth-last-child(2):nth-child(9n-6)]:col-span-6
                [&>*:nth-last-child(1):nth-child(9n-5)]:col-span-6
                [&>*:nth-last-child(2):nth-child(9n+3)]:col-span-6
                [&>*:nth-last-child(3):nth-child(9n+2)]:row-span-2
                [&>*:nth-last-child(3):nth-child(9n+2)]:col-span-6
                [&>*:nth-last-child(4):nth-child(9n+1)]:col-span-6
                [&>*:nth-last-child(1):nth-child(9n+2)]:col-span-6
                [&>*:nth-last-child(2):nth-child(9n+1)]:col-span-6
                [&>*:nth-last-child(1):nth-child(9n+1)]:col-span-6` }
  >
    <ModalGallery sessionCards={ sessionCards }>
      { ({ onShowModal }) =>
        sessionCards.map((card, index) => (
          <SessionCard
            actionCard={ () => onShowModal(index) }
            key={ card.documentId }
            sessionCard={ card }
          />
        )) }
    </ModalGallery>
  </div>
);
