"use client";

import { useCallback, useState } from "react";

import { filtersPrice } from "../lib";
import { MemoizeFilterItem } from "./filter-item";


export const FiltersPrice = () => {
  const [activeFilter, setActiveFilter] = useState<typeof filtersPrice[number]["value"]>("personal");

  const handleOnClickFilter = useCallback((value: typeof filtersPrice[number]["value"]) => {
    setActiveFilter(value);
  }, []);

  return (
    <div className="flex items-center w-fit basis-1/2">
      { filtersPrice.map((filter) => (
        <MemoizeFilterItem
          filter={ filter }
          handleOnClickFilter={ handleOnClickFilter }
          isActiveFilter={ activeFilter === filter.value }
          key={ filter.id }
        />
      )) }
    </div>
  );
};
