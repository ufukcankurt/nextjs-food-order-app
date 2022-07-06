import styles from "../styles/Footer.module.css"
import React from 'react'
import Image from "next/image"

const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <Image src="/img/bg.png" layout="fill" alt="" />
    </div>
    <div className={styles.item}>
      <div className={styles.card}>
        <h2 className={styles.motto}>
          OH YES, WE DID. THE UCK PIZZA, WELL BAKED SLICE OF PIZZA
        </h2>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
        <p className={styles.text}>
          1654 R. Don Road #304. <br/>
          Washington, DC <br/>
          {`(602) 867-2233`}
        </p>
        <p className={styles.text}>
          1654 R. Don Road #304. <br/>
          Washington, DC <br/>
          {`(602) 867-2233`}
        </p>
        <p className={styles.text}>
          1654 R. Don Road #304. <br/>
          Washington, DC <br/>
          {`(602) 867-2233`}
        </p>
        <p className={styles.text}>
          1654 R. Don Road #304. <br/>
          Washington, DC <br/>
          {`(602) 867-2233`}
        </p>
        <h1 className={styles.title}>WORKING HOURS</h1>
        <p className={styles.text}>
          MONDAY UNTIL FRIDAY <br/>
          9:00 - 22:00
        </p>
        <p className={styles.text}>
          SATURDAY - SUNDAY <br/>
          12:00 - 24:00
        </p>
      </div>
      <div className={styles.card}></div>
    </div>
      
    </div>
  )
}

export default Footer