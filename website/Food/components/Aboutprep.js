import React from "react";
import { useRef, useState } from "react";
import styles from "../style/prepuk.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

// import required modules
export default function Aboutprep() {
  return (
    <div className={`row align-items-center ${styles.about_main}`}>
      <div className="col-lg-6">
        <Swiper
          // navigation={true}
          arrow={false}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img
              src="https://prepuk.com/wp-content/uploads/2020/12/about-3.jpg"
              className={styles.slide_image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://prepuk.com/wp-content/uploads/2020/12/about-1.jpg"
              className={styles.slide_image}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://prepuk.com/wp-content/uploads/2020/12/about-2.jpg"
              className={styles.slide_image}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="col-lg-6 text-light text-start">
        <h1 className={styles.about_header}>ABOUT pREP</h1>
        <p className="text-light about_para mt-2">
          pREP is all about healthy, tasty food with a twist. So many people
          make an effort to lead a healthy lifestyle but don’t find the time to
          prepare their food, this is why pREP was created.
        </p>
        <div className="d-flex mt-4 align-items-center">
          <button type="" className={styles.about_btn}>
            SHOP PREP
          </button>
          &nbsp; &nbsp; <h4>or</h4> &nbsp; &nbsp;{" "}
          <button type="" className={styles.about_btn}>
            ABOUT PREP
          </button>
        </div>
      </div>
    </div>
  );
}
