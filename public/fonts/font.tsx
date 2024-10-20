import { Agdasima } from "next/font/google";
import { Rajdhani } from "next/font/google";

export const agdasima = Agdasima({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-agdasima",
});

export const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-agdasima",
});
