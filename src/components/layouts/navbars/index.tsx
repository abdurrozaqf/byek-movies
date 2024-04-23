"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

import { MoonIcon, SunIcon } from "lucide-react";

import SearchBox from "@/components/elements/SearchBox";

export default function Navbar() {
  const { setTheme, theme } = useTheme();

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <header className="sticky top-0 z-10 w-full dark:bg-black/50 backdrop-blur-sm">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/">
          <h1 className="text-2xl font-extrabold tracking-widest text-white">
            Byek!
          </h1>
        </Link>
        <div className="flex items-center justify-end w-1/2 gap-x-4">
          <SearchBox />
          <div
            onClick={() => handleTheme()}
            className="bg-transparent rounded-md cursor-pointer text-slate-300"
          >
            {theme == "light" ? (
              <SunIcon className="border border-slate-300 h-[40px] w-[40px] p-2 rounded-md shadow-md" />
            ) : (
              <MoonIcon className="border border-slate-300 h-[40px] w-[40px] p-2 rounded-md shadow-md" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
