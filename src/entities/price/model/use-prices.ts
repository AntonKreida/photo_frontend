"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

import { QUERY_KEYS } from "@shared/";

import { getPrices } from "../api";


export const usePrices = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const currentTypePrice = searchParams?.get("type") as string;

    if (!currentTypePrice) {
      const params = new URLSearchParams(searchParams ?? "");
      params.set("type", "all");
      router.push(`${pathname}?${params.toString()}`, {
        scroll: false
      });
      return;
    }


  }, [pathname, router, searchParams]);

  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.PRICES, searchParams?.get("type") as string],
    queryFn: async () => await getPrices(searchParams?.get("type") as string),
    placeholderData: (prev) => prev,
  });

  return {
    pricesResponseData: data,
    isLoading,
    isError,
  };
};
