import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { Button, HeaderPage } from "@shared/";


export const SessionsPage = () => (
  <div className="w-full">
    <HeaderPage
      actionComponent={ () => (
        <Button>
          <span>Заказать съемку</span>
          <ArrowRightIcon className="w-5 h-5" />
        </Button>
      ) }
      subTitle="портретная съемка как зеркало души"
      title="Личные фотосессии"
    />
  </div>
);

export default SessionsPage;
