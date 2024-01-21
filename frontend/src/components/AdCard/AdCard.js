import React from "react";
import styles from "./styles.module.css";
// import BgImage from "../../assets/coffee-meeting.jpg";

const AdCard = () => {
  return (
    <div className={styles.card_container}>
      <div className={styles.overlay}></div>
      <div className={styles.inner_container}>
        <div className={styles.text_container}>
          <h1 className="text-white">Embrace the <br/>Endless Sip-sation!</h1>
          <p>
            Indulge in style with our diverse product lineup, ensuring your
            Starbucks journey is as stylish as it is delightful. We're committed
            to bringing the Starbucks experience within reach for everyone. Sip,
            savor, and elevate your moments!
          </p>
          <button className={styles.ad_button}>Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
