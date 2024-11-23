import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

import Portal from "@/components/Portal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sales-Team",
  icons: {
    icon: "assets/sales_team_hand.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
        <Portal>{children}</Portal>
        </ClerkProvider>
      </body>
    </html>
  );
}
