import React from "react";
import Hero from "../components/Home/Hero/Hero";
import HomeMap from "../components/Home/FindUs/HomeMap";
import HomeMapSideCard from "../components/Home/FindUs/HomeMapSideCard";
import FAQSection from "../components/Home/FAQ/FAQ";
import OurServices from "../components/Home/OurService/OurServices";

export default function Home() {
  document.title = "Tanzar Home";
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
        <OurServices />
      </div>
      <div className="px-10 mt-10">
        <FAQSection />
      </div>
    </div>
  );
}
