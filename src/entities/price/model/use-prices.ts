"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";


import { getPrices } from "../api";
import { ENUM_PRICE_TYPE } from "../lib";


export const usePrices = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentTypePrice = searchParams?.get("type") as ENUM_PRICE_TYPE[keyof ENUM_PRICE_TYPE];

    if (!(currentTypePrice && (Object.values(ENUM_PRICE_TYPE)).find((value) => value === currentTypePrice))) {
      const params = new URLSearchParams(searchParams ?? "");
      params.set("type", "personal");
      router.push(`${pathname}?${params.toString()}`, {
        scroll: false
      });
      return;
    }


  }, [pathname, router, searchParams]);

  const { data, isLoading } = useQuery({
    queryKey: ["prices", searchParams?.get("type") as ENUM_PRICE_TYPE[keyof ENUM_PRICE_TYPE]],
    queryFn: async () => await getPrices(searchParams?.get("type") as ENUM_PRICE_TYPE[keyof ENUM_PRICE_TYPE]),
    placeholderData: (prev) => prev,
  });


  return {
    pricesResponseData: data,
    isLoading,
  };
};
