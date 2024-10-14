import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { FormContact } from "@features/";
import { HeaderPage } from "@shared/";


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
  </div>
);

export default SessionsPage;
