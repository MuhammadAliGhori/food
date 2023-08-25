import React, { useEffect, useState } from "react";
// import "./style/global.css";
import Muscle from "./components/Muscle";
import Aboutprep from "./components/Aboutprep";
import Celebrates from "./components/Celebrates";
import PrepNews from "./components/PrepNews";
import FormHome from "./components/FormHome";
import Footer from "./components/Footer";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./style/prepuk.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    img: "https://prepuk.com/wp-content/uploads/2020/12/Step1.png",
    title: "Define your Goal & Pick your Food Type",
    para: "Tailor your meals by setting a goal and choosing your preferred diet.",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2020/12/Step2.png",
    title: "Select a Bundle",
    para: "Opt for the perfect meal bundle to suit your needs and palate.",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2020/12/Step3.png",
    title: "One time Order or Subscription",
    para: " Go for a one-off treat or subscribe for regular, hassle-free dining.",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2020/12/Step4.png",
    title: "Enjoy your meal",
    para: " Relish in the delightful dishes curated just for you.",
  },
];

const data2 = [
  {
    img: "https://prepuk.com/wp-content/uploads/2023/01/weeklytaster.png",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2023/01/monthlyprepbundles.png",
  },
  {
    img: "https://prepuk.com/wp-content/uploads/2023/01/customprepbundles.png",
  },
];

const customNavigation = {
  prevEl: ".custom-swiper-button-prev",
  nextEl: ".custom-swiper-button-next",
};
export default () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [navbarTogglerBackground, setNavbarTogglerBackground] =
    useState("white");
  const [colors, setColors] = useState({
    background: "transparent",
    font: "white",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setColors({ background: "white ", font: "green" });
        setNavbarTogglerBackground("green");
      } else {
        setColors({ background: "transparent", font: "white" });
        setNavbarTogglerBackground("white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleActions = () => {
    setOpen(!open);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const breakpoints = {
    300: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    350: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2.7,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3.7,
      spaceBetween: 0,
    },
    991: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  };

  return (
    <div className="container-fluid p-0 overflow-x-hidden">
      <div className="row position-relative justify-content-center">
        <p
          className={`${styles.deliver_para}  fixed-top text-light text-center mb-0`}
        >
          We now deliver 3 days a week! Visit our FAQ for more information.
        </p>
        <div className={`col-lg-12 ${styles.deliver_hero}`}>
          <img
            src="https://prepuk.com/wp-content/uploads/2018/11/PrepUK-Logo-NoDisc-Colour-WEB.png"
            className={`${styles.logo} fixed-top  `}
            alt="logo"
          />
        </div>
        <div className="col-lg-6"></div>
        <div
          className={`col-lg-6 position-absolute d-flex  ${styles.rightbar_header}`}
        >
          <div
            className={` w-100 flex-column d-grid fixed-top justify-content-end ${styles.fixnavbar}`}
            style={{ backgroundColor: colors.background }}
          >
            <ul className="navbar-nav mr-auto align-items-end justify-content-end w-100 mt-lg-4">
              <li className={`nav-item ${styles.socialIcons}`}>
                <a className="nav-link d-flex gap-4" href="#">
                  <i
                    className="fab fa-facebook-f f-20  d-flex justify-content-center align-items-center mx-4"
                    style={{ color: colors.font }}
                  ></i>
                  <i
                    className="fab fa-instagram f-20 d-flex justify-content-center align-items-center "
                    style={{ color: colors.font }}
                  ></i>
                </a>
              </li>
            </ul>
            <div className={styles.nav1}>
              <div
                className={`d-flex align-items-center justify-content-end px-3  mt-lg-2 mt-0`}
              >
                <ul className=" mr-auto d-flex align-items-center justify-content-between w-100 gap-lg-4 gap-md-3">
                  <a
                    className="nav-link f-20 "
                    style={{ color: colors.font }}
                    href="#"
                  >
                    Order
                  </a>
                  <a
                    className="nav-link f-20 "
                    style={{ color: colors.font }}
                    href="#"
                  >
                    pREP Meals
                  </a>
                  <a
                    className="nav-link f-20 "
                    style={{ color: colors.font }}
                    href="#"
                  >
                    About
                  </a>
                  <a
                    className="nav-link f-20 "
                    style={{ color: colors.font }}
                    href="#"
                  >
                    News
                  </a>
                  <a
                    className="nav-link  f-20 "
                    style={{ color: colors.font }}
                    href="#"
                  >
                    Contact
                  </a>
                </ul>
              </div>
            </div>

            <div className={styles.nav2}>
              <div className={`d-flex align-items-center justify-content-end `}>
                <Button
                  onClick={handleShow}
                  className={`bg-transparent border-0 mt-2 ${styles.togle_btn}`}
                  // type="button"
                  // aria-controls="navbarSupportedContent"
                  // aria-expanded={isDropdownOpen}
                  // aria-label="Toggle navigation"
                >
                  <span
                    style={{ backgroundColor: navbarTogglerBackground }}
                  ></span>
                  <span
                    style={{ backgroundColor: navbarTogglerBackground }}
                  ></span>
                  <span
                    style={{ backgroundColor: navbarTogglerBackground }}
                  ></span>
                </Button>

                <Modal
                  show={show}
                  onHide={handleClose}
                  animation={false}
                  style={{ zIndex: "9999999" }}
                >
                  <Modal.Header closeButton className="green">
                    <Modal.Title className="green fw-700">pREP UK</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ul className="navbar-nav mr-auto align-items-center justify-content-between w-100 gap-lg-4 gap-md-3">
                      <li className="nav-item">
                        <a className="nav-link f-20 green" href="#">
                          Order
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link f-20 green" href="#">
                          pREP Meals
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link f-20 green" href="#">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link f-20 green" href="#">
                          News
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link green f-20 "
                          href="#"
                          // style={{ color: colors.font }}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </Modal.Body>
                </Modal>

                <div
                  className={`f-20 text-white dropdown position-relative ${
                    isDropdownOpen ? "show" : ""
                  }`}
                >
                  <i
                    className={`f-20  dropdown fas fa-shopping-basket mx-4 cursor-pointer ${
                      open ? "show" : ""
                    }`}
                    onClick={toggleActions}
                    style={{ color: colors.font }}
                  ></i>
                  {open && (
                    <div className="text-white position-absolute top-2 w-100 left-0">
                      <p
                        className={`position-absolute bg-light green ${styles.basket_para}`}
                      >
                        Basket have nothing{" "}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`col-lg-12 d-flex justify-content-start ${styles.header_main}`}
        >
          <div className={styles.header_content}>
            <h1 className={`text-start green ${styles.effortless}`}>
              EFFORTLESS HEALTHY EATING DELIVERED ACROSS THE UK{" "}
              <img
                className={styles.effort_icon}
                src="https://prepuk.com/wp-content/uploads/2020/12/Group-188.png"
                alt=""
              />
            </h1>
            <h4 className={`green text-start ${styles.subheader}`}>
              Great tasting Meal pREP for{" "}
              <a href="" className="green">
                Weight Loss,{" "}
              </a>{" "}
              <br />
              <a href="" className="green">
                Muscle Gain
              </a>{" "}
              &{" "}
              <a href="" className="green">
                Maintenance
              </a>
            </h4>
            <div className="d-flex py-3">
              <button type="" className={`green ${styles.prepbtn}`}>
                Shop pREP
              </button>{" "}
              <h4 className="text-light"> &nbsp; &nbsp;or &nbsp;&nbsp;</h4>
              <h4>
                <a href="" className="green">
                  About pREP
                </a>
              </h4>
            </div>
            <div className="position-relative text-start">
              <img
                src="https://prepuk.com/wp-content/uploads/2020/12/Group-183.png"
                className={`${styles.paypal_img} position-absolute`}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* cards1 */}
        <div
          className={`col-lg-12 d-flex px-5 pb-lg-5 pb-md-3 ${styles.cards_hero}`}
        >
          {data.map((item, index) => {
            return (
              <div className={styles.card_main} key={index}>
                <img
                  className={`card-img-top ${styles.card_img}`}
                  src={item.img}
                  alt="Card image cap"
                />
                <div className="card-body text-start mt-2">
                  <h5
                    className={`card-title fw-500 ${styles.pink_header} fw-600`}
                  >
                    {item.title}
                  </h5>
                  <p>{item.para}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* cards2 */}
        <div className={`col-lg-12 d-flex px-5 pb-5 mt-3 ${styles.cards_hero}`}>
          {data2.map((item, index) => {
            return (
              <div
                className={`card border-0 ${styles.card_bundles}`}
                key={index}
              >
                <a href="">
                  <img className="card-img-top" src={item.img} alt="" />
                </a>
              </div>
            );
          })}
        </div>
        {/* new meals */}
        <div className="pb-5 mt-3 col-lg-12">
          <img
            src="https://prepuk.com/wp-content/uploads/2023/07/Pasta-Pot-Bundle-1.jpg"
            className={styles.new_meals_post}
            alt=""
          />
        </div>
        {/* our meals */}
        <div className="col-lg-12">
          <h1 className="text-center our_meals pb-3">OUR pREP MEALS</h1>
          {/* tabs */}
          {/* <nav className="mb-4 tabs_box">
              <div
                className="nav nav-tabs border-0 d-flex justify-content-around"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className={`nav-link border-0 text-dark ${styles.fuit_hero} active`}
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  <div>
                    <img
                      className={styles.fruit_img}
                      src="https://prepuk.com/wp-content/uploads/2020/12/ig1.png"
                      alt=""
                    />
                    <h6 className="mt-1">Meat</h6>
                  </div>
                </button>
                <button
                  className={`nav-link border-0 text-dark ${styles.fuit_hero}`}
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <div>
                    <img
                      className={styles.fruit_img}
                      src="https://prepuk.com/wp-content/uploads/2020/12/ig2.png"
                      alt=""
                    />
                    <h6 className="mt-1">Meat & Fish</h6>
                  </div>
                </button>
                <button
                  className={`nav-link border-0 text-dark ${styles.fuit_hero}`}
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <div>
                    <img
                      className={styles.fruit_img}
                      src="https://prepuk.com/wp-content/uploads/2020/12/ig3.png"
                      alt=""
                    />
                    <h6 className="mt-1">Vegetarian</h6>
                  </div>
                </button>

                <button
                  className={`nav-link border-0 text-dark ${styles.fuit_hero}`}
                  id="nav-fish-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-fish"
                  type="button"
                  role="tab"
                  aria-controls="nav-fish"
                  aria-selected="false"
                >
                  <div>
                    <img
                      className={styles.fruit_img}
                      src="https://prepuk.com/wp-content/uploads/2020/12/ig4.png"
                      alt=""
                    />
                    <h6 className="mt-1">Fish & Vegetarian</h6>
                  </div>
                </button>

                <button
                  className={`nav-link border-0 text-dark ${styles.fuit_hero}`}
                  id="nav-gluten-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-gluten"
                  type="button"
                  role="tab"
                  aria-controls="nav-gluten"
                  aria-selected="false"
                >
                  <div>
                    <img
                      className={styles.fruit_img}
                      src="https://prepuk.com/wp-content/uploads/2020/12/ig5.png"
                      alt=""
                    />
                    <h6 className="mt-1">Fish & Vegetarian</h6>
                  </div>
                </button>

                <button
                  className={`nav-link border-0 text-dark ${styles.fuit_hero}`}
                  id="nav-halal-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-halal"
                  type="button"
                  role="tab"
                  aria-controls="nav-halal"
                  aria-selected="false"
                >
                  <div>
                    <img
                      className={styles.fruit_img}
                      src="https://prepuk.com/wp-content/uploads/2020/12/ig6.png"
                      alt=""
                    />
                    <h6 className="mt-1">Fish & Vegetarian</h6>
                  </div>
                </button>





              </div>
            </nav> */}

          <nav className={`mb-4 px-md-3 ${styles.tabs_box}`}>
            <Swiper
              modules={[Navigation, Scrollbar, A11y]}
              spaceBetween={0}
              slidesPerView={3}
              navigation={customNavigation}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              breakpoints={breakpoints}
              style={{ height: "100px" }}
              loop={true}
              autoplay={{ delay: 3000 }}
              className={`nav nav-tabs border-0 d-flex justify-content-around ${styles.bold1}`}
              id="nav-tab"
              role="tablist"
            >
              <div className={` px-4 ${styles.customSwiperNavigation}`}>
                <div
                  className={`swiper-button-next custom-swiper-button-next slider_global_classes ${styles.pr1}`}
                >
                  {/* Next */}
                </div>
                <div
                  className={`swiper-button-prev custom-swiper-button-prev slider_global_classes ${styles.pr2}`}
                >
                  {/* Prev */}
                </div>
              </div>

              <SwiperSlide className="d-flex justify-content-center">
                <button
                  className={`nav-link border-0 text-dark ${styles.fuit_hero} active`}
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  <div>
                    <img
                      className={styles.fruit_img}
                      src="https://prepuk.com/wp-content/uploads/2020/12/ig1.png"
                      alt=""
                    />
                    <h6 className="mt-1">Meat</h6>
                  </div>
                </button>
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center">
                <button
                  className={`nav-link border-0 text-dark ${styles.fuit_hero}`}
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <div>
                    <img
                      className={styles.fruit_img}
                      src="https://prepuk.com/wp-content/uploads/2020/12/ig2.png"
                      alt=""
                    />
                    <h6 className="mt-1">Meat & Fish</h6>
                  </div>
                </button>
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center">
                <button
                  className={`nav-link border-0 text-dark ${styles.fuit_hero}`}
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <div>
                    <img
                      className={styles.fruit_img}
                      src="https://prepuk.com/wp-content/uploads/2020/12/ig3.png"
                      alt=""
                    />
                    <h6 className="mt-1">Vegetarian</h6>
                  </div>
                </button>
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center">
                <button
                  className={`nav-link border-0 text-dark ${styles.fuit_hero}`}
                  id="nav-fish-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-fish"
                  type="button"
                  role="tab"
                  aria-controls="nav-fish"
                  aria-selected="false"
                >
                  <div>
                    <img
                      className={styles.fruit_img}
                      src="https://prepuk.com/wp-content/uploads/2020/12/ig4.png"
                      alt=""
                    />
                    <h6 className="mt-1">Fish & Vegetarian</h6>
                  </div>
                </button>
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center">
                <button
                  className={`nav-link border-0 text-dark ${styles.fuit_hero}`}
                  id="nav-gluten-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-gluten"
                  type="button"
                  role="tab"
                  aria-controls="nav-gluten"
                  aria-selected="false"
                >
                  <div>
                    <img
                      className={styles.fruit_img}
                      src="https://prepuk.com/wp-content/uploads/2020/12/ig5.png"
                      alt=""
                    />
                    <h6 className="mt-1">Fish & Vegetarian</h6>
                  </div>
                </button>
              </SwiperSlide>
              <SwiperSlide className="d-flex justify-content-center">
                <button
                  className={`nav-link border-0 text-dark ${styles.fuit_hero}`}
                  id="nav-halal-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-halal"
                  type="button"
                  role="tab"
                  aria-controls="nav-halal"
                  aria-selected="false"
                >
                  <div>
                    <img
                      className={styles.fruit_img}
                      src="https://prepuk.com/wp-content/uploads/2020/12/ig6.png"
                      alt=""
                    />
                    <h6 className="mt-1">Fish & Vegetarian</h6>
                  </div>
                </button>
              </SwiperSlide>
            </Swiper>
          </nav>

          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <Muscle />
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              2
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              3
            </div>
            <div
              className="tab-pane fade"
              id="nav-fish"
              role="tabpanel"
              aria-labelledby="nav-fish-tab"
            >
              4
            </div>
            <div
              className="tab-pane fade"
              id="nav-gluten"
              role="tabpanel"
              aria-labelledby="nav-gluten-tab"
            >
              5
            </div>
            <div
              className="tab-pane fade"
              id="nav-halal"
              role="tabpanel"
              aria-labelledby="nav-halal-tab"
            >
              6
            </div>
            {/* subTabs */}
          </div>
        </div>
        {/* About Prepuk */}
        <div className="col-lg-12">
          <Aboutprep />
        </div>
        {/*Celebs  */}
        <div className="col-lg-12 py-5">
          <h1 className={`${styles.about_header} gray text-center`}>
            pREP CELEBS
          </h1>
          <div className="mt-4">
            <Celebrates />
          </div>
        </div>
        {/*news  */}
        <div className="col-lg-12 pt-5 pb-3 d-flex flex-column justify-content-center">
          <h1 className={`${styles.about_header} gray text-center`}>
            pREP NEWS
          </h1>
          <div className={styles.newsslide}>
            <PrepNews />
          </div>
        </div>
        {/* Form */}
        <div className="col-lg-12 pb-5">
          <FormHome />
        </div>
        {/* footer */}
        <div className="col-lg-12">
          <Footer />
        </div>
      </div>
    </div>
  );
};
