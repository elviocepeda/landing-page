import Image from "next/image";
import logo from "../../../images/defico-logo.png";
import wsp from "../../../images/whatsapp.png";
import { Navbar } from "./Navbar";
import styles from "../../../styles/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Image src={logo} alt="DEFICO: Despacho Fiscal y Contable" />
      <Navbar styles={styles} />
      <div className={styles.wsp_container}>
        <p className={styles.wsp_container_p}>Contáctanos</p>
        <Image src={wsp} alt="DEFICO: Whatsapp" />
      </div>
    </header>
  );
};
