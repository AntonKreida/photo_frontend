import {
  ArrowRightIcon,
  ArrowUturnLeftIcon
} from "@heroicons/react/24/solid";

import { CardPhoto } from "@entities/";
import {
  ButtonBack,
  FooterPage,
  HeaderPage,
  LinkButton,
  ROUTES_PAGES
} from "@shared/";

import { GalleryWrapper } from "./gallery-wrapper";
import mockImage from "../mock/mock.jpg";


const SessionPage = () => (
  <div className="w-full">
    <HeaderPage
      classNameTitle="normal-case"
      renderComponent={ () => (
        <ButtonBack>
          <ArrowUturnLeftIcon className="w-5 h-5" />
          <span>Назад</span>
        </ButtonBack>
      ) }
      title="Фотосессия Алены"
    />

    <GalleryWrapper>
      { Array.from({ length: 12 }).map((_, index) => ({
        id: index,
        href: mockImage,
        title: "Алена"
      })).map((card) => <CardPhoto cardPhoto={ card } key={ card.id } />) }
    </GalleryWrapper>

    <FooterPage classNameInner="justify-center">
      <LinkButton href={ ROUTES_PAGES.PRICE }>
        <span>Узнать стоимость услуг</span>
        <ArrowRightIcon className="w-5 h-5" />
      </LinkButton>
    </FooterPage>
  </div>
);

export default SessionPage;
