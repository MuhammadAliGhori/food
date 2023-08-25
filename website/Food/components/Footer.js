import React from "react";
import styles from "../style/prepuk.module.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default function Footer() {
  return (
    <div className={`d-flex w-100 ${styles.footer_hero}`}>
      <div
        className={`d-flex flex-column justify-content-center ${styles.footer_boxes}`}
      >
        <div className="d-flex justify-content-center align-items-center gap-4">
          <img
            className={styles.footer_logo}
            src="https://prepuk.com/wp-content/uploads/2018/11/PrepUK-Logo-NoDisc-Colour-WEB-1.png"
            alt="logo"
          />
          <div className="d-flex gap-2">
            <i
              className={`fab fa-facebook-f d-flex justify-content-center align-items-center ${styles.social_media}`}
            ></i>
            <i
              className={`fab fa-instagram d-flex justify-content-center align-items-center ${styles.social_media}`}
            ></i>
            <i
              className={`fab fa-envelope  d-flex justify-content-center align-items-center ${styles.social_media}`}
            ></i>
          </div>
        </div>

        <h5
          className={`text-start fw-300 text-white mt-3 ${styles.footer_para}`}
        >
          pREP is all about healthy, tasty food with a twist. So many people
          make an effort to lead a healthy lifestyle but don’t find the time to
          prepare their food, this is why pREP was created.
        </h5>
        <h5
          className={`text-start w-100 fw-300 text-white pt-4 ${styles.footer_para}`}
        >
          Company Number: 10333558
        </h5>
      </div>
      <div
        className={`d-flex flex-column justify-content-center ${styles.footer_boxes}`}
      >
        <h3 className={`text-white fw-600 text-start ${styles.preplink}`}>pREP Links</h3>
        <ul className="text-start pt-1 px-3">
          <li className={`text-white mt-1 ${styles.footer_para}`}>Home</li>
          <li className={`text-white mt-1 ${styles.footer_para}`}>
            pREP Bundles
          </li>
          <li className={`text-white mt-1 ${styles.footer_para}`}>Meals</li>
          <li className={`text-white mt-1 ${styles.footer_para}`}>About</li>
          <li className={`text-white mt-1 ${styles.footer_para}`}>News</li>
          <li className={`text-white mt-1 ${styles.footer_para}`}>
            Muscle Build Meal pREP
          </li>
          <li className={`text-white mt-1 ${styles.footer_para}`}>FAQs</li>
          <li className={`text-white mt-1 ${styles.footer_para}`}>
            Testimonials
          </li>
          <li className={`text-white mt-1 ${styles.footer_para}`}>Contact</li>
        </ul>
      </div>
      <div
        className={`d-flex flex-column justify-content-center ${styles.footer_boxes}`}
      >
        <h3 className="text-white fw-600 text-start">Useful Links</h3>
        <ul className="text-start pt-1 px-3">
          <li className={`text-white mt-2 ${styles.footer_para}`}>
            My Account
          </li>
          <li className={`text-white mt-2 ${styles.footer_para}`}>Checkout</li>
          <li className={`text-white mt-2 ${styles.footer_para}`}>Cart</li>
          <li className={`text-white mt-2 ${styles.footer_para}`}>Halal</li>
          <li className={`text-white mt-2 ${styles.footer_para}`}>
            Diet Meal pREP
          </li>
          <h3 className="text-white fw-600 text-start text-start mt-4" style={{marginLeft:"-17px"}}>
            Legal Links
          </h3>
          <li className={`text-white mt-2 ${styles.footer_para}`}>
            Privacy Policy
          </li>
          <li className={`text-white mt-2 ${styles.footer_para}`}>
            Cookie Policy
          </li>
        </ul>
      </div>
      <div
        className={`${styles.footer_boxes} d-flex flex-column align-items-start`}
      >
        <h3 className="text-white fw-600 text-start w-100">Contact pREP</h3>
        <ul className="text-start pt-1 px-0">
          <div className="d-flex align-items-baseline gap-2">
            <i className="far fa-clock text-white"></i>
            <p className={`text-white mt-1 ${styles.footer_para}`}>
              Monday-Friday: 11:00am – 4:00pm
            </p>
          </div>

          <div className="d-flex align-items-baseline gap-2">
            <i className="fas fa-phone text-white"></i>
            <p className={`text-white mt-3 ${styles.footer_para}`}>
              01484 362147
            </p>
          </div>

          <div className="d-flex align-items-baseline gap-2">
            <i className="far fa-envelope text-white"></i>
            <p className={`text-white mt-3 ${styles.footer_para}`}>
              sales@prepuk.com
            </p>
          </div>

          <div className="d-flex align-items-baseline gap-2">
            <i className="fas fa-map-marker-alt text-white"></i>
            <p className={`text-white mt-3 ${styles.footer_para}`}>
              23 Southgate, Huddersfield, West Yorkshire, HD1 1QZ
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
}
