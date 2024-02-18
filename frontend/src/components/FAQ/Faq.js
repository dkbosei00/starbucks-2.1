import React, { useState } from "react";
import styles from "./styles.module.css";

const Faq = () => {
  const accordionData = [
    {
      title: "What types of coffee do you offer?",
      content:
        "We offer a variety of espresso-based drinks, brewed coffee options, flavored beverages, iced coffee, and seasonal specials.",
    },
    {
      title: "Are your coffee beans ethically sourced?",
      content:
        "Yes, we're committed to ethically sourcing our coffee beans, ensuring fair compensation for farmers and promoting environmental sustainability.",
    },
    {
      title: "Can I customize my drinks, and do you have non-dairy options?",
      content:
        "Absolutely! Customize your drinks with choices like soy, almond, oat, or coconut milk, and adjust sweetness levels and flavors. We aim to make your experience personal and enjoyable.",
    },
    {
      title: "How do I earn rewards through your loyalty program?",
      content:
        "You can earn rewards by simply making purchases with your registered Starbucks Card or through the Starbucks mobile app.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className={styles.faq_container}>
      <div className={styles.faq_inner}>
        <div className={styles.accordion_div}>
          <div className={styles.accordion_inner}>
            <div>
              <h1 className={styles.header_1}>We are here to assist you</h1>
            </div>
            <div className={styles.header_2}>
              <p>
                For specific shipping-related information and any additional
                questions, refer to our Shipping FAQs or reach out to our
                customer service team.
              </p>
            </div>
            <div className="accordion">
              {accordionData.map((item, index) => (
                <div key={index} className={`accordion-item my-4 ${styles.accordion_item}`}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${styles.accordion_item} ${
                        openAccordion === index ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => handleAccordionToggle(index)}
                    >
                      {item.title}
                    </button>
                  </h2>
                  <div
                    className={`accordion-collapse collapse ${
                      openAccordion === index ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.images_div}>
          <div className={styles.images_div_inner}>
            <div className={styles.left_img}></div>
            <div className={styles.right_img}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
