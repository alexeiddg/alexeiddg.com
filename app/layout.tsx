import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "../styles/globals.css";

const robotoSerif = Roboto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexeiddg | Pathscreative ",
  description: "Be Creative Today",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en">
      <body className={robotoSerif.className + " custom-font"}>{children}</body>
      </html>
  );
}
