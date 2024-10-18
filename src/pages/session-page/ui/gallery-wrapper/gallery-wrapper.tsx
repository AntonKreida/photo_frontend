import { FC, ReactNode } from "react";


interface IGalleryWrapperProps {
    children: ReactNode
}

export const GalleryWrapper: FC<IGalleryWrapperProps> = ({ children }) => (
  <div className="w-full mt-[90px] grid grid-cols-12 gap-[2px]">
    { children }
  </div>
);
