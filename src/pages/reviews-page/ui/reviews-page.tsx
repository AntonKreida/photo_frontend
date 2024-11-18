import { ReviewCreate } from "@features/";
import { HeaderPage } from "@shared/";
import { ReviewsFeed } from "@widgets/";


export const ReviewsPage = () => (
  <div className="w-full">
    <HeaderPage
      renderComponent={ () => (
        <ReviewCreate />
      ) }
      title="Отзывы"
    />

    <ReviewsFeed />
  </div>
);
