import { FC, ReactNode } from "react";

import { twClassNames } from "@shared/lib";


interface IHeaderPageProps {
    title: string;
    subTitle?: string;
    renderComponent?: () => ReactNode;
    classNameTitle?: string;
}

export const HeaderPage: FC<IHeaderPageProps> = ({
  title, subTitle, renderComponent, classNameTitle
}) => (
  <div className="w-full">
    <div className="w-full flex justify-between">
      <div>
        <h1 className={ twClassNames("text-carbon text-4xl font-normal font-gabriela uppercase", [classNameTitle]) }>
          { title }
        </h1>
        { !!subTitle && (
          <h2 className="text-carbon/70 text-2xl font-light font-futura-pt">{ subTitle }</h2>
        ) }
      </div>
      { !!renderComponent && renderComponent() }
    </div>
  </div>
);
