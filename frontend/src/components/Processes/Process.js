import React, { useRef, useEffect } from 'react';
import styles from './styles.module.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
            start: "top 70%",
            end: "top 20%",
            markers: true,
            scrub: true,
            toggleActions: "restart none none none",
        }
    })
  

    return () => {
      ScrollTrigger.getById(container).kill();
    };
  }, []);

  return (
    <div>
      <div ref={containerRef} className={styles.container}></div>
    </div>
  );
};

export default Process;
