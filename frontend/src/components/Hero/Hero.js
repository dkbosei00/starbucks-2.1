import React from 'react';
import styles from './styles.module.css';
import temp from '../../assets/temp.png'

const Hero = () => {
  return (
    <div>
        <img src={temp} className={styles.temp_img} alt="hero-temp"/>
    </div>
  )
}

export default Hero