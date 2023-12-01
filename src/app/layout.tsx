import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Byek! Movies",
  description: "Welcome to Byek! Movies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`w-full h-screen flex flex-col bg-gradient-to-br dark:from-black/5 dark:to-white/5 ${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="w-full flex-grow overflow-auto px-8 md:px-16 xl:px-32 py-14">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
