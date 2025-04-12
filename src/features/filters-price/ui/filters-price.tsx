"use client";

import { motion } from "framer-motion";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";


import { useTypePrices } from "@entities/";

import { MemoizeFilterItem } from "./filter-item";


export const FiltersPrice = () => {
  const { typePrices } = useTypePrices();

  const refCarousel = useRef<null | HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
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

  useEffect(() => {
    const controller = new AbortController();

    const handleWindowEvents = () => {
      if(!refCarousel.current) return;
      setWidth(refCarousel.current.scrollWidth - refCarousel.current.offsetWidth);
    };

    window.addEventListener("resize", handleWindowEvents, { signal: controller.signal });

    handleWindowEvents();

    return () => controller.abort();
  }, []);

  return (
    <motion.div className="w-full lg:w-fit" ref={ refCarousel }>
      <motion.div className="flex items-center w-full lg:w-fit lg:justify-end basis-1/2"
        drag={ width > 0
          ? "x"
          : false }
        dragConstraints={{ right: 0, left: -width }}
      >
        <MemoizeFilterItem
          filter={{ id: 0, type: "all", translate: "Все" }}
          handleOnClickFilter={ handleOnClickFilter }
          isActiveFilter={ searchParams?.get("type") === "all" }
          key="all"
        />

        { typePrices?.map((filter) => (
          <MemoizeFilterItem
            filter={ filter }
            handleOnClickFilter={ handleOnClickFilter }
            isActiveFilter={ searchParams?.get("type") === filter.type || activeFilter === filter.type }
            key={ filter.id }
          />
        )) }
      </motion.div>
    </motion.div>
  );
};
