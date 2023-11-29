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
      <body className={`w-full h-screen flex flex-col ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="w-full flex-grow overflow-auto bg-white dark:bg-black px-32">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
