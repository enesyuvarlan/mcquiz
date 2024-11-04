import React from "react";
import { rajdhani } from "~/public/fonts/font";

interface StatusCardProps {
  title: string;
  value: string | number | undefined;
  color: string;
}
export function StatusCard({ title, value, color }: StatusCardProps) {
  return (
    <div
      className={`${rajdhani.className} ${color} flex flex-col justify-start items-center  max-w-[250px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[500px] overflow-hidden text-ellipsis whitespace-nowrap text-2xl  font-bold text-white px-7 py-3 rounded-full`}
    >
      <div className="">{title}</div>
      <div className="">{value}</div>
    </div>
  );
}
