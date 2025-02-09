import { Metadata } from "next";
import { Quicksand } from "next/font/google";
import ConditionalInfo from "@/components/CdnInfo";
import { ReactNode } from "react";
import ConditionalHeader from "../components/CdnHeader";
import ConditionalFooter from "../components/CdnFooter";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <ConditionalHeader />

        <div id="detail">{children}</div>
        <ConditionalInfo />
        <ConditionalFooter />
      </body>
    </html>
  );
}
