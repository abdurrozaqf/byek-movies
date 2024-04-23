import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";

import ReactQueryProvider from "@/services/providers/react-query-provider";
import ThemeProvider from "@/services/providers/theme-provider";
import Layouts from "@/components/layouts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Byek! Movies",
  description: "Welcome to Byek! Movies",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Layouts>{children}</Layouts>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
