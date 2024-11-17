"use client";
import React from "react";
import { redirect } from "next/navigation";

export default function HomePage() {
  React.useEffect(() => {
    void redirect("/login");
  }, []);

  return null;
}
