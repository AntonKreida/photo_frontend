import { FC, memo } from "react";

import { filtersPrice } from "../lib";

import { twClassNames } from "@shared/";


interface IFilterItemProps {
    filter: typeof filtersPrice[number];
    handleOnClickFilter: (value: typeof filtersPrice[number]["value"]) => void;
    isActiveFilter: boolean;
}

const FilterItem: FC<IFilterItemProps> = ({ filter, handleOnClickFilter, isActiveFilter }) => (
  <button
    className={ twClassNames(`text-end font-futura-pt font-medium
        text-[15px] outline-none flex-[1_0_0] w-fit text-nowrap
        pb-4 border-b-2 border-beluga text-beluga uppercase
        hover:text-carbon transition-[color,_border-color]
        active:text-carbon active:border-carbon`, {
      "text-carbon border-carbon": isActiveFilter
    }) }
    onClick={ () => handleOnClickFilter(filter.value) }
  >
    <span>{ filter.name }</span>
  </button>
);

export const MemoizeFilterItem = memo(FilterItem);