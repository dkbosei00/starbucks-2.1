import React from 'react';
import styles from './styles.module.css';
import Starbucks from '../../assets/starbucks-restaurant.jpg'

const Banner = () => {
  return (
    <div className={styles.banner_container}>
        <div className={styles.banner1_div}>
            <div className={styles.banner1_inner1}>
                <div className={styles.inner1_main}>
                    <h1 className={}></h1>
                </div>
            </div>
            <div className={styles.banner1_inner2}>
                <img src={Starbucks} alt='alal' className={styles.starbucks_res}/>
            </div>
        </div>
    </div>
  )
}

export default Banner;