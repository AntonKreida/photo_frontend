import { ReviewCreate } from "@features/";
import { HeaderPage } from "@shared/";
import { ReviewsFeed } from "@widgets/";


const ReviewsPage = () => (
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

export default ReviewsPage;
