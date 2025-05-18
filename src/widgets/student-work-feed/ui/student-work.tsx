import { FC } from "react";

import { AdapterImage } from "@shared/";

import { IStudentWork } from "../lib";


interface IStudentWorkProps {
    studentCard: IStudentWork;
}

export const StudentWork: FC<IStudentWorkProps> = ({ studentCard }) => (
  <div className="flex flex-col gap-4 items-center lg:max-w-[300px] w-full h-[400px] col-span-3 lg:col-span-4 lg:h-[300px] overflow-hidden">
    <AdapterImage
      alt={ studentCard.workImage.name }
      className="object-cover object-center"
      classNameWrapper="w-full h-full overflow-hidden shadow"
      height={ studentCard.workImage.height }
      priority
      quality={ 100 }
      src={ `${ process.env.NEXT_PUBLIC_API_URL }${ studentCard.workImage.url }` }
      width={ studentCard.workImage.width }
    />
  </div>
);
