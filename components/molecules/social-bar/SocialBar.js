import facebook from "../../../images/facebook.png";
import instagram from "../../../images/instagram.png";
import twitter from "../../../images/twitter.png";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/SocialBar.module.css";

export const SocialBar = () => {
  return (
    <div className={styles.container}>
      <a
        target="_blank"
        href="https://www.facebook.com/"
        rel="noopener noreferrer"
      >
        <div className={styles.img}>
          <Image src={facebook} alt="Facebook" />
        </div>
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/"
        rel="noopener noreferrer"
      >
        <div className={styles.img}>
          <Image src={instagram} alt="Instagram" />
        </div>
      </a>
      <a
        target="_blank"
        href="https://www.twitter.com/"
        rel="noopener noreferrer"
      >
        <div className={styles.img}>
          <Image src={twitter} alt="Twitter" />
        </div>
      </a>
    </div>
  );
};
