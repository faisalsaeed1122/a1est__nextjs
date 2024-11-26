"use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import clsx from "clsx";
// import Image from "next/image";

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

export default function TestimonialSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Enable required modules
      spaceBetween={20} // Space between slides
      slidesPerView={1} // Number of slides visible at a time
      navigation={false} // Enable navigation
      pagination={{ clickable: true }} // Enable pagination
      autoplay={false} // Enable autoplay
      grabCursor={true}
      className="Testimonial__Slider"
    >
      <SwiperSlide>
        <div class="item">
          <div class="testimonial-holder">
            <p class="testimonial-holder__testi">
              Team are excellent to work with as always. They would go a step
              further on suggestions and recommendations that best fit your
              needs. Amazing communication, quality work, and exceeding
              expectations!
            </p>
            <span class="testimonial-holder__name">Joseph William</span>
            <span class="testimonial-holder__designation">Co Founder</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="item">
          <div class="testimonial-holder">
            <p class="testimonial-holder__testi">
              Fantastic work! I am just impressed by their service quality and
              working strategy. They have a great expertise, are dedicated,
              attentive, talented and care much about the client needs. Highly
              recommended.
            </p>
            <span class="testimonial-holder__name">Reece Michael</span>
            <span class="testimonial-holder__designation">
              Managing Director
            </span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
