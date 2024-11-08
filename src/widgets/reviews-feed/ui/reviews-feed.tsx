import { Review } from "@entities/";


export const ReviewsFeed = () => (
  <div className="mt-[76px] flex flex-col gap-[51px] [&>div:nth-child(even)>div:nth-child(1)]:col-start-2
  [&>div:nth-child(even)>div:nth-child(2)]:col-start-1"
  >
    { Array.from({ length: 3 }).map((_, index) => (
      <Review key={ index } />
    )) }
  </div>
);
