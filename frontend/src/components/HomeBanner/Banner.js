import React from "react";
import styles from "./styles.module.css";
import Starbucks from "../../assets/starbucks-restaurant.jpg";
import Boy from "../../assets/boy-smiling.jpg";
import Workers from "../../assets/workers.jpg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div className={styles.banner1_div}>
        <div className={styles.banner1_inner1}>
          <div className={styles.inner1_main}>
            <h1 className={styles.inner1_header}>
              Stop by a <br /> shop today
            </h1>
            <p>
              From handcrafted beverages to delightful pastries, we love to
              serve our Starbucks community. So come join the experience... and
              come ready to indulge!
            </p>
            <p>
              <i>
                PLEASE NOTE THAT STARBUCKS COFFEEHOUSE IS STILL OPEN WITH YOUR
                FAVORITE BARISTAS CREATING YOUR SPECIAL DRINKS! WE CAN'T WAIT TO
                SERVE YOU.
              </i>
            </p>
            <p>
              Starting in October 2023, we will introduce a new signature drink
              to explore.
            </p>

            <button className={styles.button_49}>20% OFF</button>
          </div>
        </div>
        <div className={styles.banner1_inner2}>
          <img src={Starbucks} alt="alal" className={styles.starbucks_res} />
        </div>
      </div>
      {/* <div className={styles.banner2_div}>
        <div className={styles.banner2_inner2}>
          <div className={styles.banner2_main}>
            <h1>
              <FaQuoteLeft className={styles.quote_left}/>
              Everything I brew, <br />I brew it for you
              <FaQuoteRight className={styles.quote_right}/>
            </h1>
            <p>- STARBUCKS</p>
          </div>
        </div>
      </div> */}
      <div className={styles.banner3_div}>
        <div className={styles.banner3_inner}>
          <img src={Boy} alt="" className={styles.boy_img} />
          <div className={styles.banner3_inner_btm}>
            <img src={Workers} alt="" className={styles.worker_img} />
            <p className={styles.banner3_quote}>
              Beneath the mermaid's gaze, we meet, <br /> In Starbucks' haven,
              cozy seat. <br />A latte swirls, a mocha dream,
              <br /> Sipping stories, a silent stream.
              <br /> Caffeine's embrace, a poet's retreat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
