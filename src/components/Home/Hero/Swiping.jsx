import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export default function Swiping() {
  const [covers, setCovers] = useState([]);

  useEffect(() => {
    fetch("data/cover.json")
      .then((res) => res.json())
      .then((data) => {
        setCovers(data);
      });
  }, []);

  return (
    <div className="w-full h-full lg:w-1/2 mx-auto">
      <Swiper
        spaceBetween={30}
        effect="fade"
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        modules={[EffectFade, Autoplay]}
        className="w-full h-full"
      >
        {covers.map((cover, index) => (
          <SwiperSlide key={index} className="w-full h-full ">
            <Slide src={cover.imgLink} name={cover.title}></Slide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
