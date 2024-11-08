import { Review } from "@entities/";


export const ReviewsFeed = () => (
  <div className="mt-[76px] flex flex-col gap-[51px] [&>div:nth-child(even)>div]:col-start-2">
    { Array.from({ length: 3 }).map((_, index) => (
      <Review key={ index } />
    )) }
  </div>
);
