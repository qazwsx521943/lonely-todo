"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();
type Props = {
    children?: ReactNode;
};

function QueryWrapper({ children }: Props) {
    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            {children}
        </QueryClientProvider>
    );
}

export default QueryWrapper;
