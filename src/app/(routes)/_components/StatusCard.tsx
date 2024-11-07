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
      className={`${rajdhani.className} ${color} flex flex-col justify-center items-center min-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap text-2xl  font-bold text-white px-7 py-3 rounded-full shadow-md`}
    >
      <div className="">{title}</div>
      <div className="">{value}</div>
    </div>
  );
}
