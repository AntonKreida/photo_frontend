"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, ReactNode } from "react";

import { getQueryClient } from "./get-query-client";


interface IProviderQueryProps {
    children: ReactNode;
}

export const ProviderQuery: FC<IProviderQueryProps> = ({ children }) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={ queryClient }>
      <ReactQueryDevtools initialIsOpen={ false } />
      { children }
    </QueryClientProvider>
  );
};
