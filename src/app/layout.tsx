import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";

import ReactQueryProvider from "@/components/react-query-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Nav";

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
      <body
        className={`w-full min-h-screen flex flex-col justify-center overflow-auto  ${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <Navbar />
            <main className="w-full scroll-smooth transition-all duration-300">
              {children}
            </main>
            <Toaster />
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
