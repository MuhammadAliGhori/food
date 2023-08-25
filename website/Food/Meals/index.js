import React from "react";
import MealsCards from "./components/MealsCards";
import styles from "./styles/main.module.css";
import NavbarBox from "./components/NavbarBox";

export default () => {
  return (
    <div className={styles.fontf}>
      <div className={`${styles.mainhd} fixed-top`}>
        <NavbarBox />
      </div>
      <MealsCards />
    </div>
  );
};
