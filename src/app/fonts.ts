import { Press_Start_2P, Open_Sans } from "next/font/google";

export const retro_font = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-retro",
});

export const main_font = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-main",
});
