import Image from "next/image";
import logo from "../../../images/defico-logo.png";
import wsp from "../../../images/whatsapp.png";
import { Navbar } from "./Navbar";
import styles from "../../../styles/Header.module.css";
import { NavbarBurger } from "./NavbarBurger";
import { deficoText } from "../../../common/constants";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image src={logo} alt={deficoText.DEFICO_OFFICE} />
      </div>
      <Navbar styles={styles} />
      <NavbarBurger styles={styles} />
      <div className={styles.wsp_container}>
        <p className={styles.wsp_container_p}>{deficoText.CONTACT_US}</p>
        <Image src={wsp} alt={deficoText.HEADER_DEFICO_WHATSAPP} />
      </div>
    </header>
  );
};
