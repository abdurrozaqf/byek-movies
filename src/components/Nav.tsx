"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

import { MoonIcon, SunIcon } from "lucide-react";

import SearchBox from "@/components/SearchBox";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <header className="w-full sticky top-0 z-10 border-b bg-background">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">
          <p className="text-black dark:text-white font-extrabold tracking-widest text-2xl">
            Byek!
          </p>
        </Link>
        <div className="flex items-center gap-x-4">
          <SearchBox />
          <div
            onClick={() => handleTheme()}
            className="cursor-pointer bg-background hover:bg-accent rounded-md"
          >
            {theme == "light" ? (
              <SunIcon className="border h-[40px] w-[40px] p-2 rounded-md shadow-md" />
            ) : (
              <MoonIcon className="border h-[40px] w-[40px] p-2 rounded-md shadow-md" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
