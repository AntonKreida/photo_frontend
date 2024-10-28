"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";


import { getPrices } from "../api";
import { ENUM_PRICE_TYPE } from "../lib";


export const usePrices = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [typePrice, setTypePrice] = useState<ENUM_PRICE_TYPE[keyof ENUM_PRICE_TYPE]>("personal");

  useEffect(() => {
    const currentTypePrice = searchParams?.get("type") as ENUM_PRICE_TYPE[keyof ENUM_PRICE_TYPE];

    if (currentTypePrice && (Object.values(ENUM_PRICE_TYPE)).find((value) => value === currentTypePrice)) {
      setTypePrice(currentTypePrice);
      return;
    }

    const params = new URLSearchParams(searchParams ?? "");
    params.set("type", "personal");
    router.push(`${pathname}?${params.toString()}`, {
      scroll: false
    });


  }, [pathname, router, searchParams]);

  const { data, isLoading } = useQuery({
    queryKey: ["prices", typePrice],
    queryFn: () => getPrices(typePrice),
    placeholderData: (prev) => prev,
  });


  return {
    prices: data,
    isLoading,
  };
};
