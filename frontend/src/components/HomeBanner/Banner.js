import React from "react";
import styles from "./styles.module.css";
import Starbucks from "../../assets/starbucks-restaurant.jpg";
import Boy from "../../assets/boy-smiling.jpg";
import Workers from "../../assets/workers.jpg";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

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
              From housemade sausages to racks of ribs, we love to feed our
              Kansas City community. So come join the party… and come hungry!
            </p>
            <p>
              <i>
                PLEASE KNOW JONES BAR-B-Q RESTAURANT IS STILL OPEN WITH THE
                SHORTY AND LITTLE SISTERS RUNNING IT! WE WOULD LOVE TO SEE YOU.
              </i>
            </p>
            <p>
              Starting in October 2022 we will have a new Hot BBQ sauce to check
              out.
            </p>

            <button className={styles.button_49}>20% OFF</button>
          </div>
        </div>
        <div className={styles.banner1_inner2}>
          <img src={Starbucks} alt="alal" className={styles.starbucks_res} />
        </div>
      </div>
      <div className={styles.banner2_div}>
        <div className={styles.banner2_inner2}>
          <div className={styles.banner2_main}>
            <h1>
              <FaQuoteLeft size={52} style={{marginTop: "-8vh"}}/>Everything I brew, <br />I brew it for you<FaQuoteRight size={52} style={{marginTop: "-8vh"}}/>
            </h1>
            <p>- STARBUCKS</p>
          </div>
        </div>
      </div>
      <div className={styles.banner3_div}>
        <div className={styles.banner3_inner}>
          <img src={Boy} alt="" className={styles.boy_img} />
          <div className={styles.banner3_inner_btm}>
            <img src={Workers} alt="" className={styles.worker_img} />
            <p className={styles.banner3_quote}> 
              Beneath the mermaid's gaze, we meet, <br/> In Starbucks' haven, cozy
              seat. <br/>A latte swirls, a mocha dream,<br/> Sipping stories, a silent
              stream.<br/> Caffeine's embrace, a poet's retreat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
