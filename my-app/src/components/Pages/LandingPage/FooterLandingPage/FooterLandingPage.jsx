import React from 'react'
import styles from './FooterLandingPage.module.css'

export const FooterLandingPage = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerImage}>
          <img src="https://www.ikea.com/global/en/images/footer-daylight.svg" alt="" />
      </div>
      <div className={styles.footerMain}>
        <span>© Inter IKEA Systems B.V. 1999 - 2021</span>
        <span>Cookie information Privacy Statement</span>
      </div>
    </div>
  )
}
