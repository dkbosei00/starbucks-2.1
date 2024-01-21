import React, { useState } from "react";
import styles from "./styles.module.css";
import { ReviewData } from "../../utils/ReviewData";
import Star from "../../assets/black-star.png";

const Review = () => {
  const [position, setPosition] = useState(0);

  const handleDragStart = (e) => {
    e.preventDefault();
    startX.current = e.clientX;
  };

  const handleDragMove = (e) => {
    if (startX.current !== null) {
      const diff = e.clientX - startX.current;
      setPosition((prevPosition) => prevPosition + diff);
      startX.current = e.clientX;
    }
  };

  const handleDragEnd = () => {
    startX.current = null;
  };

  const startX = React.useRef(null);

  return (
    <div className={styles.review_main_container}>
      <div className={styles.inner_container}>
        <div className={styles.header_container}>
          <h1>Happy customer words</h1>
        </div>
        <div
          className={styles.sliderContainer}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          <div
            className={styles.slider}
            style={{ transform: `translateX(${position}px)` }}
          >
            {ReviewData.map((review, index) => (
              <div key={index} className={styles.slide}>
                <div className={styles.text_container}>
                  <div className={styles.text_container_inner}>
                    <div>
                      <div>
                        <div className={styles.rating_stars}>
                          <i>
                            <img src={Star} alt="rating star" />
                          </i>
                          <i>
                            <img src={Star} alt="rating star" />
                          </i>
                          <i>
                            <img src={Star} alt="rating star" />
                          </i>
                          <i>
                            <img src={Star} alt="rating star" />
                          </i>
                          <i>
                            <img src={Star} alt="rating star" />
                          </i>
                        </div>
                      </div>
                      <p className={styles.comment}>{review.review}</p>
                    </div>
                    <div className={styles.reviewer_det}>
                      <div className={styles.name}>
                        <p>{review.name}</p>
                      </div>
                      <div className={styles.loc}>
                        <p className={styles.location}>{review.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.image_container}>
                  <div className={styles.image_inner}>
                    <img
                      src={review.image}
                      alt={review.name}
                      style={{
                        width: "65%",
                        height: "16vh",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
