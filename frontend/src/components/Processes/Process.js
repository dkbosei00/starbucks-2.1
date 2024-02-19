import React, { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Starbuck from "../../assets/starbucks.png";
import Order from "../../assets/order.png";
import Delivery from "../../assets/delivery.png";
import Processing from "../../assets/processing.png";

const Process = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;

    gsap.to(container, {
      width: "90vw",
      borderRadius: "50px",
      duration: 8,
      scrollTrigger: {
        trigger: container,
        start: "top 45%",
        end: "top 10%",
        // markers: true,
        scrub: true,
        toggleActions: "restart none none none",
      },
    });

    return () => {
      ScrollTrigger.getById(container).kill();
    };
  }, []);

  return (
    <div style={{marginTop: "17vh"}}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.container_first_part}>
          <div className={styles.container_header}>
            <div>
              <img src={Starbuck} alt="starbuck-logo" className={styles.logo} />
            </div>
            <div>
              <h1 className={styles.header_text}>
                Crafting quality you’ll{" "}
                <span className={styles.special_text}>remember</span>
              </h1>
            </div>
          </div>
          <div>
            <p>
              Here at Starbucks, we stir up more than just coffee. Design isn't
              just an afterthought; it's the very essence of our brand. With our
              innovative design services, we curate a team of creative minds who
              understand the language of aesthetics. From captivating
              storefronts to enticing packaging, we craft visuals that resonate
              deeply with your audience. We're not just about aesthetics; we're
              about storytelling, fostering connections, and driving conversion.
              That's design with passion. That's Starbucks.
            </p>
          </div>
        </div>

        <div className={styles.bottom_div}>
          <h3>Our process</h3>
          <div className={styles.cards_container}>
            <div
              className={styles.card}
              style={{ background: "rgb(218, 255, 153)" }}
            >
              <div className={styles.card_inner}>
                <div className={styles.logo}>
                  <img
                    src={Order}
                    alt="order-icon"
                    style={{ width: "14vw", marginTop: "8vh" }}
                  />
                </div>
                <div className={styles.number} style={{marginTop: "10vh"}}>
                  {" "}
                  <div className={styles.number_char}>
                    <h3>01</h3>
                  </div>
                  <div className={styles.divider}>
                    <div></div>
                  </div>
                </div>
                <div className={styles.name}>Order</div>
                <div className={styles.description}>
                  {" "}
                  <p>
                    Choose your brew, customize your cup. It's that simple.
                    We're here to craft your coffee experience, no holds barred.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card} style={{ background: "#DBD7FF" }}>
              <div className={styles.card_inner}>
                <div className={styles.logo}>
                  <img
                    src={Processing}
                    alt="processing-icon"
                    style={{ width: "14vw" }}
                  />
                </div>
                <div className={styles.number}>
                  {" "}
                  <div className={styles.number_char}>
                    <h3>02</h3>
                  </div>
                  <div className={styles.divider}>
                    <div></div>
                  </div>
                </div>
                <div className={styles.name}>Process</div>
                <div className={styles.description}>
                  <p>
                    Get your orders processed fast, accurate, and customized. A
                    few moments is all it takes. We're efficient every day of
                    the week.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.card} style={{ background: "#DAEAFD" }}>
              <div className={styles.card_inner}>
                <div className={styles.logo}>
                  <img
                    src={Delivery}
                    alt="delivery-icon"
                    style={{ width: "14vw" }}
                  />
                </div>
                <div className={styles.number}>
                  <div className={styles.number_char}>
                    <h3>03</h3>
                  </div>
                  <div className={styles.divider}>
                    <div></div>
                  </div>
                </div>
                <div className={styles.name}>Delivery</div>
                <div className={styles.description}>
                  <p>
                    We're not finished until you're delighted. We stand by our
                    commitment to ensure your delivery to your door is 100%
                    satisfactory.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
