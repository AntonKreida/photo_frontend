import { HeaderPage } from "@shared/";
import { ReviewsFeed } from "@widgets/";


export const ReviewsPage = () => (
  <div className="w-full">
    <HeaderPage title="Отзывы" />

    <ReviewsFeed />
  </div>
);
