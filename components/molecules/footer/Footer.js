import footerLogo from "../../../images/defico-footer-logo.png";
import styles from "../../../styles/Footer.module.css";
import Image from "next/image";
import { deficoText } from "../../../common/constants";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.container_border} />
      <div className={styles.container_text}>
        <div className={styles.address}>
          <span className={styles.span}>
            {deficoText.FOOTER_WTC_MEXICO_CITY}
          </span>
          <p>{deficoText.FOOTER_ADDRESS}</p>
          <p>{deficoText.FOOTER_CP}</p>
        </div>
        <div className={styles.rights}>
          <p>{deficoText.FOOTER_DEFICO_2022}</p>
          <span className={styles.span}>
            {deficoText.FOOTER_ALL_RIGHTS_RESERVED}
          </span>
        </div>
      </div>
      <div className={styles.img}>
        <Image src={footerLogo} alt={deficoText.DEFICO_OFFICE} />
      </div>
    </footer>
  );
};
