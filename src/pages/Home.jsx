import React from "react";
import Hero from "../components/Hero";
import HomeMap from "../components/HomeMap";
import HomeMapSideCard from "../components/HomeMapSideCard";

export default function Home() {
  return (
    <div className="py-10">
      <Hero />
      <div className="flex flex-col justify-around items-center md:flex-row px-4 md:px-10 mt-10">
        <HomeMap />
        <HomeMapSideCard />
      </div>
    </div>
  );
}
