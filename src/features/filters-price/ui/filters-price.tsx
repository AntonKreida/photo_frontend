"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback, useState } from "react";


import { useTypePrices } from "@entities/";

import { MemoizeFilterItem } from "./filter-item";


export const FiltersPrice = () => {
  const { typePricesResponseData } = useTypePrices();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleOnClickFilter = useCallback((value: string) => {
    const params = new URLSearchParams(searchParams ?? "");

    if (value) {
      params.set("type", value);
      setActiveFilter(value);
    } else {
      params.delete("type");
      setActiveFilter(null);
    }

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false
    });

  }, [pathname, router, searchParams]);

  return (
    <div className="flex items-center w-fit basis-1/2">
      { typePricesResponseData?.typePrices?.map((filter) => (
        <MemoizeFilterItem
          filter={ filter }
          handleOnClickFilter={ handleOnClickFilter }
          isActiveFilter={ searchParams?.get("type") === filter.type || activeFilter === filter.type }
          key={ filter.id }
        />
      )) }
    </div>
  );
};
