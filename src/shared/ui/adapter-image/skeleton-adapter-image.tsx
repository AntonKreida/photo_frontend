import { CameraIcon } from "@heroicons/react/24/solid";
import { FC } from "react";

import { twClassNames, STATUS_LOADED_IMAGE } from "@shared/lib";


interface ISkeletonAdapterImageProps {
    status: STATUS_LOADED_IMAGE
}

export const SkeletonAdapterImage: FC<ISkeletonAdapterImageProps> = ({ status }) => (
  <div className={ twClassNames("absolute top-0 left-0 w-full h-full shadow-md bg-gray-200", {
    "animate-pulse shadow-md": status === STATUS_LOADED_IMAGE.LOADING
  }) }
  >
    <CameraIcon className="w-10 h-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-slate-400" />
  </div>
);
