import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Starbucks from "../../assets/Starbucks-red-cup.mp4";
import StarbucksCup from "../../assets/starbucks-cup-2.png";

const Animations = () => {
  const asideRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const aside = asideRef.current;

    gsap.to(aside, {
      scrollTrigger: {
        trigger: "aside",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        markers: false,
        scrub: 1,
      },
    });
  }, []);

  return (
    <section>
      <aside ref={asideRef} className={styles.things}>
        <sheet>
          <div className={styles.sheet_inner}>
            <h1>STARBUCKS®</h1>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottom: "1px white solid",
                marginTop: "5vh",
              }}
            >
              <p>Company</p>
              <p>Starbucks | A Fortune 500 Company</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottom: "1px white solid",
              }}
            >
              <p>Location</p>
              <p>Seattle, Washington</p>
            </div>
            <div style={{ marginTop: "7vh" }}>
              <p>
                Did you know that Starbucks was inspired by the founder's trip
                to Italy? During his travels, he was captivated by the Italian
                coffee culture and decided to bring it to the United States.
                This passion for quality coffee led to the creation of
                Starbucks, which has since become a global phenomenon. Today,
                Starbucks continues to honor its roots by offering a wide range
                of premium coffee blends and beverages, providing customers with
                a taste of Italy in every cup.
              </p>
            </div>
          </div>
        </sheet>
      </aside>

      <div className={styles.stuff}>
        <div
          className={styles.first}
          style={{ height: "130vh", width: "100%", borderRadius: "20px" }}
        >
          <video
            className={styles.stuff_web_video}
            height="100vh"
            id="video-1"
            preload="auto"
            loop
            autoPlay={true}
            muted
          >
            <source src={Starbucks} type="video/mp4" />
          </video>
          <div className={styles.overlay}></div>
        </div>
        <div
          style={{
            background: `url(${StarbucksCup})`,
            height: "130vh",
            width: "100%",
            borderRadius: "20px",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Animations;
