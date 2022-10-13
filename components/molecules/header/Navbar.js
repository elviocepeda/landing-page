import Link from "next/link";
import { useRouter } from "next/router";
import { NAVBAR } from "./constants";

export const Navbar = ({ styles }) => {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_ul}>
        {NAVBAR.map((item) => {
          const { id, path, text, active } = item;
          const uppercased = text.toUpperCase();
          return (
            <li
              key={id}
              className={
                router.pathname == path
                  ? `${styles.navbar_li} ${active}`
                  : styles.navbar_li
              }
            >
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
