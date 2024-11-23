"use client";
import React from "react";
import { redirect } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function HomePage() {
  const { isSignedIn, user } = useUser()

  React.useEffect(() => {
    if (!isSignedIn) {
      void redirect("/sign-in", undefined, { shallow: true });
    } else {
      void redirect("/dashboard", undefined, { shallow: true });
    }
  }, [isSignedIn]);

  return null;
}
