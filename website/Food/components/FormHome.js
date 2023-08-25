import React from "react";
import styles from "../style/prepuk.module.css";

export default function FormHome() {
  return (
    <div className={`row ${styles.form_hero}`}>
      <div
        className="col-lg-7 m-0 p-0 col-md-12"
        style={{ backgroundColor: "#e5e5e5" }}
      >
        <div className={`${styles.signup_hero} w-100`}>
          <h1 className={`text-start pt-1 ${styles.sign_header}`}>
            SIGN UP TO GET 10% OFF YOUR FIRST PREP ORDER
          </h1>
          <h2 className="pt-2 text-start fw-500">
            Don’t worry – we never spam.
          </h2>
          <form className="pt-4">
            <div className="form-group d-flex gap-3">
              <input
                type="firstname"
                className={`w-50 ${styles.design_input}`}
                id="firstname"
                aria-describedby="firstname"
                placeholder="First Name"
              />
              <input
                type="lastname"
                className={`w-50 ${styles.design_input}`}
                id="lastname"
                aria-describedby="lastname"
                placeholder="Last Name"
              />
            </div>

            <div className="form-group mt-2 w-100">
              <input
                type="email"
                className={`w-100 ${styles.design_input}`}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Address"
              />
            </div>

            <div
              className={`d-flex form-group mt-lg-4 mt-3 justify-content-between ${styles.checked_hero}`}
            >
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  checked
                />
                <h5 className="form-check-label" for="flexRadioDefault1">
                  Weight Loss
                </h5>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <h5 className="form-check-label" for="flexRadioDefault2">
                  Muscle Gain
                </h5>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <h5 className="form-check-label" for="flexRadioDefault2">
                  Fitness
                </h5>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
                <h5 className="form-check-label" for="flexRadioDefault2">
                  General Fitness
                </h5>
              </div>
            </div>

            <div className="d-flex form-group mt-lg-2 mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <h5
                  className="form-check-label text-start"
                  for="flexCheckDefault"
                >
                  I consent to the storage of my data according to the Privacy
                  Policy (GDPR).
                </h5>
              </div>
            </div>
            {/* btn */}
            <div className="text-start">
              <button
                type=""
                className={` ${styles.signup_btn} text-white border-0 mt-4`}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-lg-5 m-0 p-0 col-md-12">
        <img
          className={`w-100 ${styles.form_img}`}
          src="https://prepuk.com/wp-content/uploads/2020/12/Newsletter.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
