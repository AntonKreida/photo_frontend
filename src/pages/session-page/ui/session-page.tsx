import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { ButtonBack, HeaderPage } from "@shared/";


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
    </div>
);

export default SessionPage;
