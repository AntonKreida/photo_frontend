import { ReviewCreate } from "@features/";
import { HeaderPage } from "@shared/";
import { HydratedReviewsFeed } from "@widgets/";


export const ReviewsPage = () => (
  <div className="w-full">
    <HeaderPage
      renderComponent={ () => (
        <ReviewCreate />
      ) }
      title="Отзывы"
    />

    <HydratedReviewsFeed />
  </div>
);
