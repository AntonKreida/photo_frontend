import { FC } from "react";

import { IStudentWork } from "../lib";
import { StudentWork } from "./student-work";


interface IStudentWorkFeedProps {
    studentWorks: IStudentWork[]
 }


export const StudentWorkFeed: FC<IStudentWorkFeedProps> = ({ studentWorks }) => (
  <div className="w-full h-fit flex flex-col gap-8 mt-10 md:mt-20">
    <div className="flex justify-center items-center">
      <h2 className="text-carbon text-3xl lg:text-3xl font-normal font-gabriela uppercase">Работы учеников</h2>
    </div>
    <div
      className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 w-full grid-rows-1 gap-5 justify-between xl:gap-x-[60px]
      lg:[&>*:nth-child(6n-5)]:col-span-6 lg:[&>*:nth-child(6n-5)]:max-w-[485px]
      lg:[&>*:nth-child(6n-4)]:col-span-6 lg:[&>*:nth-child(6n-4)]:max-w-[485px]
      lg:[&>*:nth-child(6n-5)]:row-span-2 lg:[&>*:nth-child(6n-5)]:h-[485px]
      lg:[&>*:nth-child(6n-4)]:row-span-2 lg:[&>*:nth-child(6n-4)]:h-[485px]
      lg:[&>*:nth-child(6n-3)]:row-span-2 lg:[&>*:nth-child(6n-3)]:h-[485px]
      lg:[&>*:nth-child(6n-3)]:col-span-12 lg:[&>*:nth-child(6n-3)]:max-w-full"
    >
      { studentWorks.map((studentWork) => (
        <StudentWork key={ studentWork.documentId } studentCard={ studentWork } />
      )) }
    </div>
  </div>
);
