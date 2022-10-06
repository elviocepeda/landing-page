import Link from "next/link";
import { NAVBAR } from "./constants";

export const Navbar = ({ styles }) => {
  return (
    <nav className="header--navbar">
      <ul className={styles.navbar_ul}>
        {NAVBAR.map((item) => {
          const { id, path, text } = item;
          const uppercased = text.toUpperCase();
          return (
            <li key={id} className={styles.navbar_li}>
              <Link href={path}>
                <a className={styles.navbar_a}>{uppercased}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
