"use client";

import Link from "next/link";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";
import {
  ClipboardEditIcon,
  LogInIcon,
  LogOutIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  function handleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <header className="w-full sticky top-0 z-50 border-b">
      <nav className="flex items-center justify-between bg-gradient-to-tr dark:from-black/5 dark:to-white/5 px-8 md:px-16 xl:px-32 py-4">
        <Link href="/">
          <p className="text-black dark:text-white font-extrabold tracking-widest text-2xl">
            Byek!
          </p>
        </Link>
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[12rem] dark:bg-black/90"
              align="end"
            >
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>My Profile</DropdownMenuItem>
              <DropdownMenuItem>My Favorite </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleTheme()}
                className=" flex justify-between"
              >
                Change Theme {theme == "light" ? <SunIcon /> : <MoonIcon />}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className=" flex justify-between">
                Login <LogInIcon />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className=" flex justify-between">
                Logout <LogOutIcon color="red" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
