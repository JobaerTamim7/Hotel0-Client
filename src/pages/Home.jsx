import React from "react";
import Hero from "../components/Hero";
import HomeMap from "../components/HomeMap";
import HomeMapSideCard from "../components/HomeMapSideCard";
import FAQSection from "../components/FAQ";

export default function Home() {
  document.title = "Hotel-0 Home";
  return (
    <div className="py-10">
      <div className="px-10">
        <Hero />
      </div>
      <div className="flex flex-col justify-around items-center md:flex-row px-4 md:px-10 mt-10">
        <HomeMap />
        <HomeMapSideCard />
      </div>
      <div className="px-10 mt-10">
        <FAQSection />
      </div>
    </div>
  );
}
