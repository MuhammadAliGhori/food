import React from "react";
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
    img: "https://prepuk.com/wp-content/uploads/2023/01/Meat-Cottage-Pie-300x300.jpg",
    title: "Beef Cottage Pie",
    para: "Homely beef jerk mince with a sweet potato topping & melted protein cheese.",
    calor: "580 Kcal",
    Fats: "8.7g",
    Protein: "44.7g",
    Carbs: "68.7g",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2023/01/Meat-Cottage-Pie-300x300.jpg",
    title: "Beef Cottage Pie",
    para: "Homely beef jerk mince with a sweet potato topping & melted protein cheese.",
    calor: "580 Kcal",
    Fats: "8.7g",
    Protein: "44.7g",
    Carbs: "68.7g",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2023/01/Meat-Cottage-Pie-300x300.jpg",
    title: "Beef Cottage Pie",
    para: "Homely beef jerk mince with a sweet potato topping & melted protein cheese.",
    calor: "580 Kcal",
    Fats: "8.7g",
    Protein: "44.7g",
    Carbs: "68.7g",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2023/01/Meat-Cottage-Pie-300x300.jpg",
    title: "Beef Cottage Pie",
    para: "Homely beef jerk mince with a sweet potato topping & melted protein cheese.",
    calor: "580 Kcal",
    Fats: "8.7g",
    Protein: "44.7g",
    Carbs: "68.7g",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2023/01/Meat-Cottage-Pie-300x300.jpg",
    title: "Beef Cottage Pie",
    para: "Homely beef jerk mince with a sweet potato topping & melted protein cheese.",
    calor: "580 Kcal",
    Fats: "8.7g",
    Protein: "44.7g",
    Carbs: "68.7g",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2023/01/Meat-Cottage-Pie-300x300.jpg",
    title: "Beef Cottage Pie",
    para: "Homely beef jerk mince with a sweet potato topping & melted protein cheese.",
    calor: "580 Kcal",
    Fats: "8.7g",
    Protein: "44.7g",
    Carbs: "68.7g",
  },
];

const customNavigation = {
  prevEl: ".custom-swiper-button-prev",
  nextEl: ".custom-swiper-button-next",
};
export default function Muscle() {
  const breakpoints = {
    300: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    400: {
      slidesPerView: 1.9,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2.3,
      spaceBetween: 0,
    },
    600: {
      slidesPerView: 2.5,
      spaceBetween: 0,
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  };
  return (
    <div className={`${styles.muscle_main} pt-4 pb-5`}>
      {/* tabs */}
      <nav className="mb-4">
        <div
          className={`nav nav-tabs border-0 d-flex justify-content-center align-items-center position-relative ${styles.main_tab}`}
          id="nav-tab"
          role="tablist"
        >
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={customNavigation}
            loop={true} // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={breakpoints}
            style={{ height: "100px" }}
            className={styles.bold2}
          >
            <div className={` px-4 ${styles.customSwiperNavigation}`}>
              <div
                className={`swiper-button-next custom-swiper-button-next slider_global_classes ${styles.sw1}`}
              >
                {/* Next */}
              </div>
              <div
                className={`swiper-button-prev custom-swiper-button-prev slider_global_classes ${styles.sw2}`}
              >
                {/* Prev */}
              </div>
            </div>
            <SwiperSlide className="d-flex justify-content-center">
              <button
                className={`nav-link border-0 text-dark active ${styles.every_tab}`}
                id="nav-hom-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-hom"
                type="button"
                role="tab"
                aria-controls="nav-hom"
                aria-selected="true"
              >
                <h3 className={styles.maintain_header}>Maintain</h3>
              </button>
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-center">
              <button
                className={`nav-link border-0 text-dark ${styles.every_tab}`}
                id="nav-profil-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profil"
                type="button"
                role="tab"
                aria-controls="nav-profil"
                aria-selected="false"
              >
                <h3 className={styles.maintain_header}>Muscle Gain</h3>
              </button>
            </SwiperSlide>
            <SwiperSlide className="d-flex justify-content-center">
              <button
                className={`nav-link border-0 text-dark ${styles.every_tab}`}
                id="nav-weight-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-weight"
                type="button"
                role="tab"
                aria-controls="nav-weight"
                aria-selected="false"
              >
                <h3 className={styles.maintain_header}>Weight Loss</h3>
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className={`tab-pane fade show row d-flex active position-relative justify-content-center align-items-center flex-wrap gap-lg-4 gap-3 ${styles.meals_cards_hero}`}
          id="nav-hom"
          role="tabpanel"
          aria-labelledby="nav-hom-tab"
        >
          {data.map((item, index) => {
            return (
              <div
                className={`card flex-row p-3 rounded-4 col-lg-5 col-md-12 ${styles.cards_child}`}
                key={index}
              >
                <img
                  src="https://prepuk.com/wp-content/uploads/2021/01/halal.png"
                  className={`position-absolute ${styles.halal}`}
                  alt="halal"
                />
                <img
                  className={`card-img-left example-card-img-responsive ${styles.veg_img}`}
                  src={item.img}
                />
                <div>
                  <div className="card-body text-start">
                    <h4 className="card-title h5 h4-sm">{item.title}</h4>
                    <p className="card-text">{item.para}</p>
                  </div>

                  <div className="d-flex justify-content-between px-3 px-lg-1">
                    <div className="text-start">
                      <p className="mb-0">Calories :</p>
                      <h4 className={styles.calories}>{item.calor}</h4>
                    </div>
                    <div className="text-start">
                      <p className="mb-0">Fats :</p>
                      <h4 className={styles.calories}>{item.calor}</h4>
                    </div>
                    <div className="text-start">
                      <p className="mb-0">Protein :</p>
                      <h4 className={styles.calories}>{item.calor}</h4>
                    </div>
                    <div className="text-start">
                      <p className="mb-0">Carbs :</p>
                      <h4 className={styles.calories}>{item.calor}</h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="tab-pane fade"
          id="nav-profil"
          role="tabpanel"
          aria-labelledby="nav-profil-tab"
        >
          2
        </div>
        <div
          className="tab-pane fade"
          id="nav-weight"
          role="tabpanel"
          aria-labelledby="nav-weight-tab"
        >
          3
        </div>
      </div>
    </div>
  );
}
