import { HeaderPage } from "@shared/";
import { HydratedReviewsFeed } from "@widgets/";


export const ReviewsPage = () => (
  <div className="w-fit">
    <HeaderPage title="Отзывы" />

    <HydratedReviewsFeed />
  </div>
);
