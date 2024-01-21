import React from "react";
import styles from "./styles.module.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Quote = () => {
  return (
    <div className={styles.quote_container}>
      <div className={styles.banner2_div}>
        <div className={styles.banner2_inner2}>
          <div className={styles.banner2_main}>
            <h1>
              <FaQuoteLeft className={styles.quote_left} />
              Everything I brew, <br />I brew it for you
              <FaQuoteRight className={styles.quote_right} />
            </h1>
            <p>- STARBUCKS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
