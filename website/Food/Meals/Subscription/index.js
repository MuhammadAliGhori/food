import React from "react";
import styles from "../styles/detail.module.css";
import { Link } from "@mui/material";
import five from "../images/lowResolution/5.jpg";
import four from "../images/lowResolution/4.jpg";
import meal1 from "../images/ml1.png";
import imgseven from "../images/7.jpg";

import Image from "next/image";
export default () => {
  return (
    <div>
      <div className={styles.imageStyle}></div>

      <div>
        <div style={{ background: "#F4FBEF", padding: "2% 5%" }}>
          <div className="text-center pt-5 mt-3">
            <h1 className="mb-4 fw-600">
              Join Our Subscription Journey! :stew:
            </h1>
            <h5 className="mb-3 fw-500">
              Welcome to Prep UK subscription – where delectable dishes meet
              effortless convenience. Dive into a world of culinary delights
              tailored to satisfy your palate and fit seamlessly into your busy
              life.
            </h5>
          </div>
          <div className="row my-5">
            <div
              className={`row mb-0 text-center ${styles.how}`}
              style={{ padding: "5%", margin: "0px" }}
            >
              <div className={` col-12 mt-2 ${styles.leftHeading}`}>
                <h2 className="ps-2 fw-600">Our Subscription Plans</h2>
              </div>
              <div className={` col-12  ${styles.rightText}`}>
                <p className="mb-0">
                  Welcome to pREP UK! We are here to make it easy for you to
                  enjoy healthy, delicious meals without the hassle of cooking
                  and grocery shopping. Here is how it works:
                </p>
              </div>
            </div>
            <div
              className={`col-sm-12 col-md-6 col-lg-4 col-xl-4 ${styles.card}`}
            >
              <Image src={four} height={250} width={350} alt="Quality" />
              <div className={styles.optionHero}>
                <h2 className="mt-4 pb-2">Weekly</h2>
                <div className={styles.options}>
                  <p style={{ lineHeight: 2 }}>
                    ✔️ A selection of 7 diverse meals delivered right to your
                    doorstep every week.<br></br>
                    ✔️ Flexibility to switch between our weekly menus or craft
                    your own.<br></br>
                    ✔️ Starting from Only £60/week.<br></br>
                  </p>
                </div>
              </div>
              <p></p>
            </div>

            <div
              className={`col-sm-12 col-md-6 col-lg-4 col-xl-4 ${styles.card}`}
            >
              <Image
                src={five}
                height={250}
                width={350}
                alt="Convenience"
              ></Image>
              <div className={styles.optionHero}>
                <h2 className="mt-4 pb-2"> Monthly</h2>
                <div className={styles.options}>
                  <p style={{ lineHeight: 2 }}>
                    ✔️ A mouth-watering variety of 28 dishes over a month.{" "}
                    <br></br>
                    ✔️ Customise your menu or trust our chefs to surprise you.
                    <br></br>
                    ✔️ Exceptional savings starting from just £240/month.
                    <br></br>
                  </p>
                  <p></p>
                </div>
              </div>
            </div>

            <div
              className={`col-sm-12 col-md-6 col-lg-4 col-xl-4 ${styles.card}`}
            >
              <Image src={five} height={250} width={350} alt="Variety"></Image>
              <div className={styles.optionHero}>
                <h2 className="mt-4 pb-2"> Custom Bundles</h2>
                <div className={styles.options}>
                  <p style={{ lineHeight: 2 }}>
                    ✔️ Tailored to your taste buds. You choose the dishes, we
                    deliver the delight.<br></br>
                    ✔️ Perfect for those who love being the master of their
                    meals.<br></br>
                    ✔️ Pricing varies based on your chosen dishes.<br></br>
                  </p>
                  <p></p>
                </div>
              </div>
            </div>

            <div className="text-center pt-3 pt-lg-4">
              <button className={styles.ordernow}>Start your Plan</button>
            </div>
          </div>
          {/* savour */}
          <div className={`row ${styles.imageTextContainer}`}>
            <div
              className={`col-sm-12 col-md-12 col-lg-6 col-xl-6  ${styles.imageContainer}`}
            ></div>
            <div
              className={`col-sm-12 col-md-12 col-lg-6 col-xl-6 order-first order-lg-0  ${styles.TextContainer}`}
            >
              <h2 className="fw-600">Ready to Savour the Experience?</h2>
              <p>
                <strong>Joining our subscription family is easy.</strong>
                <br></br> <br></br>
                👉 &nbsp; Choose your plan. <br />
                👉 &nbsp; Personalise your menu.
                <br />
                👉 &nbsp; Wait for your culinary delights to arrive.
                <br />
                👉 &nbsp; Choose your plan. <br />
                👉 &nbsp; Personalise your menu.
                <br />
                👉 &nbsp; Wait for your culinary delights to arrive.
              </p>
            </div>
          </div>

          {/* Benefits of Being a Subscriber */}

          <div className="row my-5">
            <h2 className="ps-2 fw-600 text-center py-2 pb-3 pb-lg-4">
              Benefits of Being a Subscriber
            </h2>
            <div
              className={`col-sm-12 col-md-6 col-lg-4 col-xl-4 ${styles.card}`}
            >
              <Image
                src={meal1}
                height={250}
                width={350}
                style={{ borderRadius: "150px" }}
                alt="Quality"
              />
              <div className={`${styles.optionHero} text-center`}>
                <h3 className="mt-4 pb-1 fw-600">Pick your plan & meals</h3>
                <div className={styles.options}>
                  <p style={{ lineHeight: 2 }}>
                    Priority Access: Be the first to taste our newest dishes and
                    limited-time specials.
                  </p>
                </div>
              </div>
              <p></p>
            </div>

            <div
              className={`col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center ${styles.card}`}
            >
              <Image
                src={meal1}
                height={250}
                width={350}
                style={{ borderRadius: "150px" }}
                alt="Quality"
              />
              <div className={`${styles.optionHero} text-center`}>
                <h3 className="mt-4 pb-1 fw-600"> We cook & Deliver</h3>
                <div className={styles.options}>
                  <p style={{ lineHeight: 2 }}>
                    Flexible Pause & Play: Going on holiday? Simply pause your
                    subscription and resume when you’re back.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>

            <div
              className={`col-sm-12 col-md-6 col-lg-4 col-xl-4 ${styles.card}`}
            >
              <Image
                src={meal1}
                height={250}
                width={350}
                style={{ borderRadius: "150px" }}
                alt="Quality"
              />
              <div className={`${styles.optionHero} text-center`}>
                <h3 className="mt-4 pb-1 fw-600"> Enjoy & Succeed</h3>
                <div className={styles.options}>
                  <p style={{ lineHeight: 2 }}>
                    Dedicated Support: Our team is always here to assist,
                    ensuring a hassle-free dining experience.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
