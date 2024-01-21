import React from "react";
import styles from "./styles.module.css";
import Paypal from "../../assets/PayPal.png";
import Mastercard from "../../assets/Mastercard.png";
import Amazonpay from "../../assets/Amazonpay.png";
import Applepay from "../../assets/Applepay.png";
import Klarna from "../../assets/Klarna.png";
import Logo from "../../assets/starbuck_darkg.png";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_top_div}>
        <div className={styles.brand}>
          <div className={styles.starbucks_divider}>
            <h3>Starbucks</h3>
          </div>
          {/* <div className={styles.divider}></div> */}
          <p className={styles.catch_phrase}>Coffee that inspires</p>
        </div>
        <div className={styles.locations}>
          <p>New York</p>
          <p>London</p>
          <p>Dubai</p>
          <p>Tokyo</p>
          <p>Paris</p>
          <p>California</p>
        </div>
      </div>
      <div className={styles.footer_middle_div}>
        <div className={styles.footer_middle_left}>
          <p>Be the first to know and receive 15% off an order</p>
          <input placeholder="Email Adress" className={styles.green_input} />
          <button className={styles.green_button}>Subscribe</button>
          <p className={styles.policy}>
            By submitting your email address you are agreeing to the Privacy
            Policy and Terms & Conditions.{" "}
          </p>
          <div className={styles.support}>
            <img src={Paypal} alt="Paypal" />
            <img src={Klarna} alt="Klarna" />
            <img src={Mastercard} alt="Mastercard" />
            <img src={Amazonpay} alt="Amazonpay" />
            <img src={Applepay} alt="Applepay" />
          </div>
        </div>
        <div>
          <div></div>
          <div className={styles.social_div}>
            <div className={styles.social_container}>
              <FaInstagram size={21} className={styles.social} />{" "}
              <p>Instagram</p>
            </div>
            <div className={styles.social_container}>
              <FaTwitter size={21} className={styles.social} /> <p>Twitter</p>
            </div>

            <div className={styles.social_container}>
              <FaFacebook size={21} className={styles.social} /> <p>Facebook</p>
            </div>

            <div className={styles.social_container}>
              <FaYoutube size={21} className={styles.social} /> <p>Youtube</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_div}>
        <p className={styles.copyrght}>
          2003 Starbucks, Inc. All Rights Reserved.
        </p>
        <div className={styles.footer_btm_text}>
          <p>Privacy & Security</p>
          <p>Terms of Use</p>
          <p>Corporate Site</p>
        </div>
       <a href="#navbar"><img src={Logo} alt="starbucks-logo" style={{width: "4vw", marginTop: "-1vw"}}/></a>
      </div>
    </div>
  );
};

export default Footer;
