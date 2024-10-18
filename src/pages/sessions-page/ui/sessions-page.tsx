import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { FormContact } from "@features/";
import { GalleryWrapper, HeaderPage } from "@shared/";

import mockImage from "../mock/mock.jpg";


export const SessionsPage = () => (
  <div className="w-full">
    <HeaderPage
      renderComponent={ () => (
        <FormContact
          iconButtonOpen={ <ArrowRightIcon className="w-5 h-5" /> }
          textButtonOpen="Заказать съемку"
        />
      ) }
      subTitle="портретная съемка как зеркало души"
      title="Личные фотосессии"
    />

    <GalleryWrapper galleryList={ Array.from({ length: 12 }).map((_, index) => ({ id: index, href: mockImage, title: "Алена" })) } />
  </div>
);

export default SessionsPage;
