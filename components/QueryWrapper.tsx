"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import React, { ReactNode } from "react";

type Props = {
    children?: ReactNode;
};

function QueryWrapper({ children }: Props) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default QueryWrapper;
