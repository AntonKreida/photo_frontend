import { FC, memo } from "react";

import { ITypePrice } from "@entities/";
import { twClassNames } from "@shared/";


interface IFilterItemProps {
    filter: ITypePrice;
    handleOnClickFilter: (value: string) => void;
    isActiveFilter: boolean;
}

const FilterItem: FC<IFilterItemProps> = ({ filter, handleOnClickFilter, isActiveFilter }) => (
  <button
    className={ twClassNames(`text-start lg:text-end font-futura-pt text-xl font-medium
        lg:text-base outline-none min-w-52 sm:min-w-max sm:flex-[1_0_0] lg:w-fit text-nowrap
        pb-4 border-b-2 border-beluga text-beluga uppercase
        hover:text-carbon transition-[color,_border-color]
        active:text-carbon active:border-carbon pr-4 lg:pl-4 lg:pr-0`, {
      "text-carbon border-carbon": isActiveFilter
    }) }
    onClick={ () => handleOnClickFilter(filter.type) }
  >
    <span>{ filter.translate }</span>
  </button>
);

export const MemoizeFilterItem = memo(FilterItem);
