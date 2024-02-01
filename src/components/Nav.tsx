"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

import { MoonIcon, SunIcon } from "lucide-react";

import SearchBox from "@/components/SearchBox";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <header className="w-full sticky top-0 z-10 bg-background/10 backdrop-blur">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/">
          <p className="text-2xl text-white font-extrabold tracking-widest">
            Byek!
          </p>
        </Link>
        <div className="flex items-center justify-end gap-x-4 w-1/2">
          <SearchBox />
          <div
            onClick={() => handleTheme()}
            className="cursor-pointer bg-transparent rounded-md text-white"
          >
            {theme == "light" ? (
              <SunIcon className="border border-white h-[40px] w-[40px] p-2 rounded-md shadow-md" />
            ) : (
              <MoonIcon className="border border-white h-[40px] w-[40px] p-2 rounded-md shadow-md" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
