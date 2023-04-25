import React from 'react';
import styles from './styles.module.css';
import Starbucks from "../../assets/Starbucks_vid.mp4";
import Darklogo from "../../assets/coffee-left-bg.png";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
        <div className={styles.hero_inner}>
          <div className={styles.left_div}>
            <div className={styles.left_top}>
              <img src={Darklogo} className={styles.dark_logo} alt="starbuck-logo"/>
            </div>
            <div className={styles.left_bottom}>
            <p>Not just coffee. It is</p>
            <h1>STARBUCKS</h1>
            </div>
          </div>
          <div className={styles.right_div}>
          <video className={styles.web_video} height="100vh" id="video-1" preload="auto" loop autoPlay={true} muted>
                    <source src={Starbucks} type="video/mp4" />
          </video>
          <div className={styles.overlay}></div>
          </div>
        </div>
        <div className={styles.hero_outer}>
          <div className={styles.outer_left}>SEATTLE, WASHINGTON</div>
          <div className={styles.outer_right}>EST 1971</div>
        </div>
    </div>
  )
}

export default Hero