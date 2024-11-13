import { ArrowRightIcon, ArrowUpCircleIcon } from "@heroicons/react/24/solid";

import {
  Button,
  FooterPage,
  GalleryListWrapper,
  HeaderPage,
  LinkButton,
  ROUTES_PAGES,
  ScrollLink,
} from "@shared/";

import mockImage from "../mock/mock.jpg";


const SessionsPage = () => (
  <div className="w-full">
    <HeaderPage
      subTitle="портретная съемка как зеркало души"
      title="Личные фотосессии"
    />

    <GalleryListWrapper galleryList={ Array.from({ length: 12 }).map((_, index) => ({ id: index, href: mockImage, title: "Алена" })) } />

    <FooterPage classNameInner="justify-center">
      <LinkButton href={ ROUTES_PAGES.PRICE }>
        <span>Узнать стоимость услуг</span>
        <ArrowRightIcon className="w-5 h-5" />
      </LinkButton>
    </FooterPage>

    <ScrollLink className="fixed bottom-10 right-5 z-20" heightVisible={ 100 } href="#root">
      <Button className="rounded-full p-0 bg-white hover:bg-white">
        <ArrowUpCircleIcon className="w-10 h-10" />
      </Button>
    </ScrollLink>
  </div>
);

export default SessionsPage;
