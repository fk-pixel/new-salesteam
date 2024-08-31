"use client";
import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  React.useEffect(() => {
    redirect("/login");
  }, []);

  return (
    <section className="flex w-full flex-col ">
      {/* <HeroSection />
      <CardsSection />
      <HowItWorks />
      <TestimonialSection />
      <PriceSection />
      <DownloadSection />
      <Footer /> */}
    </section>
  );
}
