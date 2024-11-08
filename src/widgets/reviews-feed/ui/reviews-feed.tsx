"use client";

import { Review, useReviews } from "@entities/";


export const ReviewsFeed = () => {
  const { reviews } = useReviews();

  return (
    <div className="mt-[76px] flex flex-col gap-[51px] [&>div:nth-child(even)>div:nth-child(1)]:col-start-2
        [&>div:nth-child(even)>div:nth-child(2)]:col-start-1"
    >
      { reviews.length > 0
        ? (
          reviews.map((review) => (
            <Review
              key={ review.id }
              review={ review }
            />
          ))
        )
        : (
          <div className="flex w-full h-full flex-col justify-center items-center">
            <div className="text-carbon/50 text-xl font-normal font-futura-pt text-center">
              На данный момент на сайте нет ни одного отзыва
            </div>
          </div>
        ) }
    </div>
  );
};
