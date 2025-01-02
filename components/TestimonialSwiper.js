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
  const data = [
    {
      id: 1,
      description:
        "I was amazed at how accurate the estimates provided by [Your Website Name] were. They gave me a clear understanding of costs upfront, which helped me budget effectively for my home renovation. The process was seamless and saved me so much time!",
      name: "Lisa M.",
      designation: "Homeowner",
    },
    {
      id: 2,
      description:
        "As a contractor, I rely on precise cost estimates to ensure my projects run smoothly. [Your Website Name] provided detailed, transparent estimates that were spot-on. It’s a game-changer for my business!",
      name: "Kevin R.",
      designation: "General Contractor",
    },
    {
      id: 3,
      description:
        "I needed a quick and reliable cost breakdown for my office remodeling project, and [Your Website Name] delivered. Their platform was easy to use, and the estimates were comprehensive. Highly recommend their services!",
      name: "Priya S.",
      designation: "Business Owner",
    },
    {
      id: 4,
      description:
        "The construction estimation services from [Your Website Name] were a lifesaver! They highlighted all the potential costs, so I could plan accordingly without unexpected surprises. Their expertise made the whole process stress-free.",
      name: "Mark T.",
      designation: "Property Developer",
    },
    {
      id: 5,
      description:
        "I appreciate the clarity and professionalism of [Your Website Name]. Their detailed cost estimates helped me make informed decisions about my building project. I’ll definitely use them for future projects!",
      name: "Jane D.",
      designation: "Architect",
    },
  ];

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
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div class="item">
            <div class="testimonial-holder">
              <p class="testimonial-holder__testi">{item.description}</p>
              <span class="testimonial-holder__name">{item.name}</span>
              <span class="testimonial-holder__designation">
                {item.designation}
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
