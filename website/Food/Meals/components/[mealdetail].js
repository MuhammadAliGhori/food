import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/detail.module.css";
import MealsTab from "./MealsTab";
import Accordion from "react-bootstrap/Accordion";
import Link from "next/link";

export default function MealDetail() {
  const router = useRouter();
  const { data } = router.query;
  //   const item = JSON.parse(data);
  console.log(data, "data");
  let item;
  try {
    item = JSON.parse(data);
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    return null;
  }

  const imageStyle = {
    backgroundImage: `url(${item.img.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    width: "100%",
  };

  return (
    <>
      <div style={imageStyle}></div>

      <div className={styles.detailhero}>
        <h2 className="mt-lg-4 mt-3 fw-600">{item.hedaer}</h2>
        <p>
          {item.para}
          <br></br>
        </p>
        <p>
          <strong>Welcome</strong> to Prep UK subscription – where delectable
          dishes meet effortless convenience. Dive into a world of culinary
          delights tailored to satisfy your palate and fit seamlessly into your
          busy life. Dedicated Support: Our team is always here to assist,
          ensuring a hassle-free dining experience.
        </p>
        <MealsTab ingredients={item.ingredients} allergens={item.allergens} />

        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Nutritional Infomation</Accordion.Header>
            <Accordion.Body>
              <h5 className="fw-600 pt-2">Ingredients</h5>
              {item.ingredients}
              <h5 className="fw-600 pt-2">Allergens:</h5>
              {item.allergens}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Nutritional Gradients</Accordion.Header>
            <Accordion.Body>
              <h5 className="fw-600 pt-2">Ingredients</h5>
              {item.ingredients}
              <h5 className="fw-600 pt-2">Allergens:</h5>
              {item.allergens}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div className="mt-3 mt-lg-4">
          <div
            className={`d-flex justify-content-around py-2 rounded-2 ${styles.valuehero}`}
          >
            <h5 className="text-light fw-600 mb-0">Macros</h5>
            <h5 className="text-light fw-600 mb-0">Values</h5>
          </div>
          <div className="pt-3">
            <div className="d-flex justify-content-around">
              <p>Proteins</p>
              <p>Fats</p>
            </div>

            <div className="d-flex justify-content-around">
              <p>Carbohydrates</p>
              <p>Calories</p>
            </div>
            <div className="d-flex justify-content-around">
              <p>51.7</p>
              <p>10.3</p>
            </div>

            <div className="d-flex justify-content-around">
              <p>83.1</p>
              <p>690</p>
            </div>
          </div>
        </div>
        <div className="text-center pt-5">
         <Link href="/subscription"> <button type="" className={styles.ordernow}>
            Order Now
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}
