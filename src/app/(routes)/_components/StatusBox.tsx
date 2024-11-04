import React from "react";
import { rajdhani } from "~/public/fonts/font";

interface ShowBoxProps {
  text: string;
}

export default function StatusBox({ text }: ShowBoxProps) {
  return (
    <div
      className={`${rajdhani.className} max-w-[250px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap text-xl bg-textColor-button-primary dark:bg-textColor-button-dark text-textColor-buttonText font-bold px-7 py-3 rounded-full`}
    >
      {text}
    </div>
  );
}
