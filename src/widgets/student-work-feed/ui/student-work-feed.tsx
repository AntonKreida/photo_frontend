import { FC } from "react";

import { IStudentWork } from "../lib";
import { StudentWork } from "./student-work";


interface IStudentWorkFeedProps {
    studentWorks: IStudentWork[]
 }


export const StudentWorkFeed: FC<IStudentWorkFeedProps> = ({ studentWorks }) => (
  <div
    className="mt-20 w-fit grid grid-cols-12 grid-rows-1 justify-between gap-x-[60px]
      [&>*:nth-child(6n-5)]:col-span-6 [&>*:nth-child(6n-5)]:max-w-[485px]
      [&>*:nth-child(6n-4)]:col-span-6 [&>*:nth-child(6n-4)]:max-w-[485px]
      [&>*:nth-child(6n-5)]:row-span-2 [&>*:nth-child(6n-5)]:h-[485px]
      [&>*:nth-child(6n-4)]:row-span-2 [&>*:nth-child(6n-4)]:h-[485px]
      [&>*:nth-child(6n-3)]:row-span-2 [&>*:nth-child(6n-3)]:h-[485px]
      [&>*:nth-child(6n-3)]:col-span-12 [&>*:nth-child(6n-3)]:max-w-full"
  >
    { studentWorks.map((studentWork) => (
      <StudentWork key={ studentWork.documentId } studentCard={ studentWork } />
    )) }
  </div>
);
