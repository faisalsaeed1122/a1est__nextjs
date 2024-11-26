"use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";
// import clsx from "clsx";
import Image from "next/image";
import Button from "./button";

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

export default function HeroSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Enable required modules
      spaceBetween={20} // Space between slides
      slidesPerView={1} // Number of slides visible at a time
      navigation // Enable navigation
      pagination={{ clickable: true }} // Enable pagination
      autoplay={false} // Enable autoplay
      grabCursor={true}
      className="Hero__Slider"
    >
      <div className="HeroWith__Text">
        <h1> A1 Estimation Inc.</h1>
        <p>
          Get you bids, takeoff and estimate ready with fastest, accurate &
          economical
        </p>
        <Link href="/about">
          <Button variant="secondary">More About Us</Button>
        </Link>
      </div>

      <SwiperSlide>
        <div className="slider__item">
          <figure className="image__holder">
            <Image
              src="/assets/images/slider-01.jpg"
              alt=""
              width={1000}
              height={38}
              priority
            />
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider__item">
          <figure className="image__holder">
            <Image
              src="/assets/images/slider-02.jpg"
              alt=""
              width={1000}
              height={38}
              priority
            />
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider__item">
          <figure className="image__holder">
            <Image
              src="/assets/images/slider-03.jpg"
              alt=""
              width={1000}
              height={38}
              priority
            />
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider__item">
          <figure className="image__holder">
            <Image
              src="/assets/images/slider-04.jpg"
              alt=""
              width={1000}
              height={38}
              priority
            />
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider__item">
          <figure className="image__holder">
            <Image
              src="/assets/images/slider-05.jpg"
              alt=""
              width={1000}
              height={38}
              priority
            />
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider__item">
          <figure className="image__holder">
            <Image
              src="/assets/images/slider-06.jpg"
              alt=""
              width={1000}
              height={38}
              priority
            />
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider__item">
          <figure className="image__holder">
            <Image
              src="/assets/images/slider-07.jpg"
              alt=""
              width={1000}
              height={38}
              priority
            />
          </figure>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider__item">
          <figure className="image__holder">
            <Image
              src="/assets/images/slider-08.jpg"
              alt=""
              width={1000}
              height={38}
              priority
            />
          </figure>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
