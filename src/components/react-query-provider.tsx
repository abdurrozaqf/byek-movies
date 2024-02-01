"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface RootLayoutProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();
const ReactQueryProvider = ({ children }: RootLayoutProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;
