import { FormContact } from "@features/";
import { HeaderPage } from "@shared/";


export const SessionsPage = () => (
  <div className="w-full">
    <HeaderPage
      renderComponent={ () => (
        <FormContact textButton="Заказать съемку" />
      ) }
      subTitle="портретная съемка как зеркало души"
      title="Личные фотосессии"
    />
  </div>
);

export default SessionsPage;
