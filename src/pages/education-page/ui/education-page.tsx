import { ArrowRightIcon } from "@heroicons/react/24/solid";

import { HeaderPage, LinkButton } from "@shared/";


const EducationPage = () => (
  <div className="w-full">
    <HeaderPage
      classNameTitle="uppercase"
      renderComponent={ () => (
        <LinkButton
          href="https://t.me/Melnikova_foto72"
          rel="noreferrer"
          target="_blank"
          type="submit"
        >
          <span>Записаться</span>
          <ArrowRightIcon className="w-5 h-5" />
        </LinkButton>
      ) }
    />
  </div>
);


export default EducationPage;
