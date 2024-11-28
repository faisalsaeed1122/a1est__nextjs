"use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import clsx from "clsx";
// import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { EffectFade } from "swiper/modules";
import {
  Navigation,
  Pagination,
  // Scrollbar,
  // A11y,
  Autoplay,
} from "swiper/modules";

export default function OurSpecialization() {
  const data = [
    { id: 1, title: "Concrete" },
    { id: 2, title: "Masonry" },
    { id: 3, title: "Metals" },
    { id: 4, title: "Wood, Plastics, and Composites" },
    { id: 5, title: "Thermal and Moisture Protection" },
    { id: 6, title: "Openings" },
    { id: 7, title: "Doors, windows and Hardware" },
    { id: 8, title: "Finishes" },
    { id: 9, title: "Flooring" },
    { id: 10, title: "Painting" },
    { id: 11, title: "Drywall" },
    { id: 12, title: "Carpentry/Rough Carpentry" },
    { id: 13, title: "Specialties" },
    { id: 14, title: "Furnishings" },
    { id: 15, title: "Special Construction" },
    { id: 16, title: "Conveying Equipment" },
    { id: 17, title: "Electrical" },
    { id: 18, title: "Mechanical" },
    { id: 19, title: "Plumbing" },
    { id: 20, title: "HVAC" },
  ];

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Enable required modules
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Number of slides visible at a time
        navigation={false} // Enable navigation
        autoplay={true} // Enable autoplay
        // slidesOffsetBefore={50} // Add 50px margin on the left
        // slidesOffsetAfter={50} // Add 50px margin on the right
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1600: {
            slidesOffsetBefore: 50,
            slidesOffsetAfter: 50,
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1900: {
            slidesOffsetBefore: 50,
            slidesOffsetAfter: 50,
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        className=""
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slider__item">{item.title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
