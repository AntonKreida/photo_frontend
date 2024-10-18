import { ArrowRightIcon, ArrowUpCircleIcon } from "@heroicons/react/24/solid";

import { FormContact } from "@features/";
import {
  Button,
  GalleryWrapper,
  HeaderPage,
  ScrollLink,
} from "@shared/";

import mockImage from "../mock/mock.jpg";


const SessionsPage = () => (
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

    <ScrollLink className="fixed bottom-10 right-5" heightVisible={ 100 } href="#root">
      <Button className="rounded-full p-0 bg-white hover:bg-white">
        <ArrowUpCircleIcon className="w-10 h-10" />
      </Button>
    </ScrollLink>
  </div>
);

export default SessionsPage;
