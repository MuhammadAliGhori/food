import React from "react";
import styles from "../styles/main.module.css";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../Meals/images/img1.png";
import img2 from "../../Meals/images/img2.png";
import img3 from "../../Meals/images/img3.png";
import tag1 from "../../Meals/images/tag1.png";
import tag2 from "../../Meals/images/tag2.png";
import tag3 from "../../Meals/images/tag1.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

export default function MealsCards() {
  const data = [
    {
      img: img1,
      tag: tag1,
      tagtext: "New",
      hedaer: "How To Regain Your Love Of Delicious Healthy Food",
      date: "07/04/2023",
      para: "People engage with meal prepping for a host of different reasons, from the most common goal…",
      ingredients:
        "Cooked Chicken(168), Sliced Pepper(30), Sliced Red Onion(20), Smoked Paprika(25), Sweet Chilli Sauce(130), Chicken Seasoning(58), Rice(140),",
      allergens:
        "Nuts, Celery, Cereals Containing Gluten, Wheat, Mustard, Halal",
    },
    {
      img: img2,
      tag: tag2,
      tagtext: "Spicy",
      hedaer: "How To Regain Your Love Of Delicious Healthy Food",
      date: "07/04/2023",
      para: "People engage with meals prepping for a host of different reasons, from the most common goal…",
      ingredients:
        "Spicy Chicken(168), Sliced Pepper(30), Sliced Red Onion(20), Smoked Paprika(25), Sweet Chilli Sauce(130), Chicken Seasoning(58), Rice(140),",
      allergens:
        "Spicy, Celery, Cereals Containing Gluten, Wheat, Mustard, Halal",
    },
    {
      img: img3,
      tag: tag3,
      tagtext: "Protine",
      hedaer: "How To Regain Your Love Of Delicious Healthy Food",
      date: "07/04/2023",
      para: "People engage with meal prepping for a host of different reasons, from the most common goal…",
      ingredients:
        "Protine Chicken(168), Sliced Pepper(30), Sliced Red Onion(20), Smoked Paprika(25), Sweet Chilli Sauce(130), Chicken Seasoning(58), Rice(140),",
      allergens:
        "Protine, Celery, Cereals Containing Gluten, Wheat, Mustard, Halal",
    },
    {
      img: img1,
      tag: tag1,
      tagtext: "Spicy",
      hedaer: "How To Regain Your Love Of Delicious Healthy Food",
      date: "07/04/2023",
      para: "People engage with meal prepping for a host of different reasons, from the most common goal…",
      ingredients:
        "Protine, Spicy,  Chicken(168), Sliced Pepper(30), Sliced Red Onion(20), Smoked Paprika(25), Sweet Chilli Sauce(130), Chicken Seasoning(58), Rice(140),",
      allergens:
        "Nuts, Protine Celery, Cereals Containing Gluten, Wheat, Mustard, Halal",
    },
    {
      img: img1,
      tag: tag2,
      tagtext: "New",
      hedaer: "How To Regain Your Love Of Delicious Healthy Food",
      date: "07/04/2023",
      para: "People engage with meal prepping for a host of different reasons, from the most common goal…",
      ingredients:
        "New Cooked Chicken(168), Sliced Pepper(30), Sliced Red Onion(20), Smoked Paprika(25), Sweet Chilli Sauce(130), Chicken Seasoning(58), Rice(140),",
      allergens:
        "New Nuts, Celery, Cereals Containing Gluten, Wheat, Mustard, Halal",
    },
  ];
  return (
    <div>
      <div className={styles.headerhero}>
        <div className={`d-flex gap-4 align-items-center ${styles.headerbox}`}>
          <Link href="/" className={`text-decoration-none  ${styles.homemenu}`}>
            Home
          </Link>
          <span className={styles.sarrow}>▸</span>{" "}
          <Link href="/meals" className="text-decoration-none text-dark">
            Menu
          </Link>
        </div>
        <div className="text-center">
          <h2 className={`${styles.menuhero}  fw-600`}>
            Our Menu: Pick Your Meal Prep Dishes
          </h2>
          <button type="" className={`${styles.orderbtn} fw-600 mt-2 `}>
            Order Now
          </button>
        </div>
        <Container fluid>
          <h3 className="fw-600 mt-lg-4 mt-3">Main Meals</h3>
          <Row className="row mt-lg-5 mt-3 gap-3 position-relative justify-content-between align-items-center">
            {data.map((item, index) => {
              return (
                <Col
                  key={index}
                  className={`${styles.newsslide} `}
                  lg={4}
                  md={6}
                  sm={6}
                  xs={12}
                >
                  <Link
                    className="text-decoration-none"
                    passHref
                    href={{
                      pathname: "/mealdetail/mealdetail",
                      query: { data: JSON.stringify(item) },
                    }}
                  >
                    <div className="card text-start">
                      <Image src={item.tag} alt="tag" className={styles.tag} />

                      <p className={`${styles.newtext} text-light fw-500`}>
                        {item.tagtext}
                      </p>
                      <Image
                        src={item.img}
                        alt="Card image cap"
                        className={`${styles.img1} card-img-top`}
                      />
                      <div className="card-body">
                        <h4 className={` fw-600 ${styles.pink_header}`}>
                          {item.hedaer}
                        </h4>
                        <h5 className="fw-500 green">{item.date}</h5>
                        <p className={`card-text ${styles.card_para}`}>
                          {item.para}
                        </p>
                        <button
                          href="#"
                          className={`${styles.readbtn} text-light border-0 mb-0`}
                        >
                          <h5 className="mb-0"> Read Article</h5>
                        </button>
                      </div>
                    </div>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
}
