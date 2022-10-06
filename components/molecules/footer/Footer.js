import footerLogo from "../../../images/defico-footer-logo.png";
import styles from "../../../styles/Footer.module.css";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.container_div}>
        <span>WTC Ciudad de México</span>
        <p>Montecito 38, Piso 28, Col. Nápoles</p>
        <p>C.P. 03810, Benito Juárez</p>
      </div>
      <Image src={footerLogo} alt="DEFICO: Despacho Fiscal y Contable" />
      <div className={styles.container_div}>
        <p>©2022 DEFICO</p>
        <span className={styles.span}>All Rights Reserved</span>
      </div>
    </footer>
  );
};
