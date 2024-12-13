import { FC, ReactNode } from "react";

import { twClassNames } from "../../lib";


interface ILayoutContentProps {
    children: ReactNode;
    className?: string
}


export const LayoutContent: FC<ILayoutContentProps> = ({ className, children }) => (
  <div className={ twClassNames("mt-7 lg:mt-[86px]", [className]) }>
    { children }
  </div>
);
