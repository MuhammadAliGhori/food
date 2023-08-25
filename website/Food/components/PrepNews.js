import React, { useEffect, useRef, useState } from "react";
import styles from "../style/prepuk.module.css";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    img: "https://prepuk.com/wp-content/uploads/2023/07/istockphoto-1354885028-612x612-1.jpg",
    hedaer: "How To Regain Your Love Of Delicious Healthy Food",
    date: "07/04/2023",
    para: "People engage with meal prepping for a host of different reasons, from the most common goal…",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2023/07/istockphoto-1354885028-612x612-1.jpg",
    hedaer: "How To Regain Your Love Of Delicious Healthy Food",
    date: "07/04/2023",
    para: "People engage with meal prepping for a host of different reasons, from the most common goal…",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2023/07/istockphoto-1354885028-612x612-1.jpg",
    hedaer: "How To Regain Your Love Of Delicious Healthy Food",
    date: "07/04/2023",
    para: "People engage with meal prepping for a host of different reasons, from the most common goal…",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2023/07/istockphoto-1354885028-612x612-1.jpg",
    hedaer: "How To Regain Your Love Of Delicious Healthy Food",
    date: "07/04/2023",
    para: "People engage with meal prepping for a host of different reasons, from the most common goal…",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2023/07/istockphoto-1354885028-612x612-1.jpg",
    hedaer: "How To Regain Your Love Of Delicious Healthy Food",
    date: "07/04/2023",
    para: "People engage with meal prepping for a host of different reasons, from the most common goal…",
  },
];

const customNavigation = {
  prevEl: ".custom-swiper-button-prev",
  nextEl: ".custom-swiper-button-next",
};
export default function PrepNews() {
  const breakpoints = {
    300: {
      slidesPerView: 0.99,
    },

    500: {
      slidesPerView: 1.5,
    },
    991: {
      slidesPerView: 2.99,
    },
    1440: {
      slidesPerView: 2.99,
    },
  };

  return (
    <div className="d-flex justify-content-center flex-column align-items-center mt-3">
      <div className={styles.mainslidenews}>
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={customNavigation}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={breakpoints}
          loop={true}
          // className={`mySwiper ${styles.customSwiper}`}
        >
          <div className={` px-4 ${styles.customSwiperNavigation}`}>
            <div
              className={`swiper-button-next custom-swiper-button-next slider_global_classes ${styles.ab1}`}
            >
              {/* Next */}
            </div>
            <div
              className={`swiper-button-prev custom-swiper-button-prev slider_global_classes ${styles.ab2}`}
            >
              {/* Prev */}
            </div>
          </div>
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index} className={styles.newsslide}>
                <div className="card text-start">
                  <img
                    className="card-img-top"
                    src={item.img}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4
                      className={`card-title fw-600 gray ${styles.card_header}`}
                    >
                      {item.hedaer}
                    </h4>
                    <h5 className="fw-500 green">{item.date}</h5>
                    <p className={`card-text ${styles.card_para}`}>
                      {item.para}
                    </p>
                    <a
                      href="#"
                      className="btn green d-flex align-items-center justify-content-start p-0"
                    >
                      <img
                        className="text-start"
                        style={{ width: "45px" }}
                        src="https://thumbs.dreamstime.com/z/external-link-icon-arrow-square-to-show-leaving-site-external-link-icon-arrow-square-to-show-leaving-site-111679793.jpg?w=768"
                        alt=""
                      />{" "}
                      <h5> Read Article</h5>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className={`text-center mt-3 ${styles.meal_news_hero}`}>
        <h1 className={`text-dark fw-600 ${styles.meal_head}`}>
          MEAL PREP SERVICES – DELIVERED TO YOU – FROM PREP UK
        </h1>

        <p className={`text-dark ${styles.meal_para}`}>
          Are you looking for a convenient way to get healthy, fresh meals
          delivered to your door? pREP UK offers meal prep services that make it
          easy for you to enjoy delicious and nutritious meals without the
          hassle of cooking. With their fresh ingredients and expert chefs, they
          provide high-quality meals that are tailored to your needs. Whether
          you’re looking for a quick snack or a full meal, pREP UK has something
          for everyone. Enjoy the convenience of having healthy, fresh meals
          delivered right to your door!
        </p>
      </div>
    </div>
  );
}
