import { FC, ReactNode } from "react";

import { twClassNames } from "../../lib";


interface IFooterPageProps {
    children: ReactNode
    classNameInner?: string
    classNameWrapper?: string
}

export const FooterPage: FC<IFooterPageProps> = ({ children, classNameInner, classNameWrapper }) => (
  <div className={ twClassNames("w-full mt-[90px] h-fit", [classNameWrapper]) }>
    <div className={ twClassNames("w-full flex justify-between p-3", [classNameInner]) }>
      { children }
    </div>
  </div>
);
