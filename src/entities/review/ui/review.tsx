import { FC } from "react";

import { AdapterImage } from "@shared/";

import { IReview } from "../lib";


interface IReviewProps {
    review: IReview
}


export const Review: FC<IReviewProps> = ({ review }) => (
  <div className="h-full grid grid-cols-[1fr,_1fr] max-h-[350px] grid-rows-1 gap-5 overflow-hidden break-all">
    <div className="col-span-1 col-start-1 row-start-1">
      <AdapterImage
        alt={ review.image?.name || "" }
        className="object-contain"
        classNameWrapper="h-full w-full"
        height={ review.image?.height }
        priority
        quality={ 100 }
        src={ `${ process.env.NEXT_PUBLIC_API_URL }${ review.image?.url }` }
        width={ review.image?.width }
      />
    </div>
    <div className="col-span-1 col-start-2 row-start-1 flex flex-col justify-center gap-[14px] text-left overflow-hidden">
      <div
        className="font-futura-pt text-xl text-carbon/60 font-light overflow-hidden overflow-y-auto
      scrollbar-thin scrollbar-thumb-carbon/50 scrollbar-track-white-smoke scrollbar-track-rounded-full
      scrollbar-thumb-rounded-full"
      >
        { review.description }
      </div>
      <div className="text-base font-normal font-gabriela text-carbon">
        { `- ${ review.author }` }
      </div>
    </div>
  </div>
);
