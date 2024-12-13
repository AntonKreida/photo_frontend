import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

import { ReviewCreate } from "@features/";
import {
  Button, HeaderPage, LayoutContent, ScrollLink 
} from "@shared/";
import { ReviewsFeed } from "@widgets/";


const ReviewsPage = () => (
  <div className="w-full">
    <HeaderPage
      renderComponent={ () => (
        <ReviewCreate />
      ) }
      title="Отзывы"
    />

    <LayoutContent>
      <ReviewsFeed />
    </LayoutContent>

    <ScrollLink heightVisible={ 100 } href="#root">
      <Button className="rounded-full p-0 bg-white hover:bg-white">
        <ArrowUpCircleIcon className="w-10 h-10" />
      </Button>
    </ScrollLink>
  </div>
);

export default ReviewsPage;
