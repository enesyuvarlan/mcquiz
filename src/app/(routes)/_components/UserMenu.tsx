import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosMenu } from "react-icons/io";
import React from "react";
import Link from "next/link";
import { agdasima } from "~/public/fonts/font";

const links = [
  { name: "Stats", path: "/stats" },
  { name: "Leaderboards", path: "/leaderboards" },
];
export const UserMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <IoIosMenu className="w-10 h-10" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background-navbar shadow-md rounded-2xl p-2">
          {links.map((link, index) => (
            <DropdownMenuItem
              key={index}
              className={`${agdasima.className} text-2xl block px-4 py-2 text-textColor-header dark:text-textColor-header-dark`}
            >
              <Link href={link.path}>{link.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
