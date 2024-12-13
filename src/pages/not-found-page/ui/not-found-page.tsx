import { HeaderPage, LayoutContent } from "@shared/";


const NotFoundPage = () => (
  <div className="w-full flex flex-col h-full">
    <HeaderPage title="" />
    <LayoutContent className="flex-grow items-center flex justify-center lg:mt-0 mt-0">
      <div className="text-3xl flex flex-col gap-2 items-center text-carbon/70 font-gabriela uppercase [text-align-last:center] font-normal">
        Страница отсутствует
        <span>404</span>
      </div>
    </LayoutContent>
  </div>
);

export default NotFoundPage;
