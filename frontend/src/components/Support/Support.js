import React from "react";
import styles from "./styles.module.css";

const Support = () => {
  return (
    <div className={styles.support_main_container}>
      <div className={styles.svg_container}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill=" #d9e2df"
            fill-opacity="1"
            d="M0,160L60,154.7C120,149,240,139,360,144C480,149,600,171,720,160C840,149,960,107,1080,112C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className={styles.card_container}>
        <div className={styles.overlay}></div>
        <div className={styles.inner_container}>
          <div className={styles.text_container}>
            <h1 className="text-white">
              WE ARE PROUD TO SUPPORT AND IMPROVE THE LIVELIHOODS OF SMALL,
              SUSTAINABLE AND SPECIALITY FARMS
            </h1>
          </div>
          <div className={styles.more_text_container}>
            <p>
              We work closely with farms worldwide to make sure that coffee
              farmers are paid a fair price, and maintain long term
              relationships to provide the stability needed to plan for the
              future. For almost all of our coffees, we can pinpoint exactly
              where your cherries were picked within the farm. For all other
              coffees, we can tell you which co-operative they work with and why
              we are proud to be involved.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.svg_container_b}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2f5b4d"
            fill-opacity="1"
            d="M0,160L60,154.7C120,149,240,139,360,144C480,149,600,171,720,160C840,149,960,107,1080,112C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Support;
