import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../style/prepuk.module.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const slide = [
  {
    img: "https://prepuk.com/wp-content/uploads/2020/12/Joel-Coleman-600x600.jpg",
    name: "Jack Payne",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2020/12/Romoney-Crichlow-Josh-Koroma-Reece-Brown-600x600.jpg",
    name: "Ellie O’Donnell",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2020/12/Jack-Payne.jpg",
    name: "John Payne",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2020/12/Jason-Robinson-600x600.jpg",
    name: "Fenayl Brown",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2020/12/Karlan-Grant-600x600.jpg",
    name: "Guccci Pwara",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2020/12/Tyrone-Nurse-600x600.jpg",
    name: "Sitaro Parka",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2020/12/Jason-Robinson-600x600.jpg",
    name: "Robin Johnson",
  },
];
export default function Celebrates() {
  const breakpoints = {
    300: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  };
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        freeMode={true}
        modules={[FreeMode, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        {slide.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img className={styles.celeb_img} src={item.img} />
              <h3 className={` ${styles.celeb_name} fw-600 mt-2 px-2`}>{item.name}</h3>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
