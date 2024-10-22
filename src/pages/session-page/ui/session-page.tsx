import {
  ArrowRightIcon,
  ArrowUturnLeftIcon
} from "@heroicons/react/24/solid";

import {
  ButtonBack,
  FooterPage,
  HeaderPage,
  LinkButton,
  ROUTES_PAGES
} from "@shared/";
import { Gallery } from "@widgets/";

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

    <Gallery cardsPhoto={ Array.from({ length: 9 }).map((_, index) => ({ id: index, href: mockImage, title: "Алена" })) } />

    <FooterPage classNameInner="justify-center">
      <LinkButton href={ ROUTES_PAGES.PRICE }>
        <span>Узнать стоимость услуг</span>
        <ArrowRightIcon className="w-5 h-5" />
      </LinkButton>
    </FooterPage>
  </div>
);

export default SessionPage;
