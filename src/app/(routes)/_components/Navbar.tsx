import React from "react";
import { agdasima } from "~/public/fonts/font";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { UserMenu } from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="bg-white rounded-full shadow-md mx-4 my-2">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="ml-2">
          <h1
            className={`${agdasima.className} text-center text-3xl md:text-4xl lg:text4xl xl:text-4xl text-textColor-header dark:text-textColor-header-dark`}
          >
            McQuiz
          </h1>
        </Link>
        <div
          className={`${agdasima.className} max-w-[250px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap text-xl bg-black text-white px-4 py-3 rounded-full`}
        >
          Quiz Name: First Quiz
        </div>
        <div className="flex flex-row gap-10 justify-center items-center">
          <UserMenu />
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
