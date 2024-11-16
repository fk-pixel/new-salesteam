import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Portal from "@/components/Portal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sales-Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-1">
          <Portal>{children}</Portal>
        </main>
      </body>
    </html>
  );
}
