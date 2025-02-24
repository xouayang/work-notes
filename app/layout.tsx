import type { Metadata } from "next";
import { Noto_Sans_Lao } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Providers } from "@/components/Provider";
import {ToastProvider} from '@heroui/react'
const Noto_sans_lao = Noto_Sans_Lao({
  subsets: ["lao"],
  weight: ["100", "200", "300", "400", "600"],
});
export const metadata: Metadata = {
  title: "XB Notes",
  description: "Create to save information task work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={Noto_sans_lao.className}>
        <Providers>
          <Navbar />
          <ToastProvider/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
