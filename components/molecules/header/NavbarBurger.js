import Link from "next/link";
import { useState } from "react";
import { Burger } from "../../atoms";
import { NAVBAR } from "./constants";

export const NavbarBurger = ({ styles }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleClick = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <nav className={styles.navbar_burguer}>
      <Burger classname={styles.navbar_burguer_icon} onClick={handleClick} />
      <ul
        className={
          showNavbar ? styles.navbar_burger_ul : styles.navbar_burger_ul_hidden
        }
      >
        {NAVBAR.map((item) => {
          const { id, path, text } = item;
          const uppercased = text.toUpperCase();
          return (
            <Link key={id} href={path}>
              <li
                className={styles.navbar_burger_li}
                onClick={() => setShowNavbar(false)}
              >
                <a className={styles.navbar_burger_a}>{uppercased}</a>
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
