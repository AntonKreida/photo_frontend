import { FC, ReactNode } from "react";


interface IHeaderPageProps {
    title: string;
    subTitle?: string;
    actionComponent?: () => ReactNode;
}

export const HeaderPage: FC<IHeaderPageProps> = ({ title, subTitle, actionComponent }) => (
  <div className="w-full">
    <div className="w-full flex justify-between">
      <div>
        <h1 className="text-carbon text-4xl font-normal font-gabriela uppercase">{ title }</h1>
        { !!subTitle && (
          <h2 className="text-carbon/70 text-2xl font-light font-futura-pt">{ subTitle }</h2>
        ) }
      </div>
      { !!actionComponent && actionComponent() }
    </div>
  </div>
);
