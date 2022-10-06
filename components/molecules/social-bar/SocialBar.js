import facebook from "../../../images/facebook.png";
import instagram from "../../../images/instagram.png";
import twitter from "../../../images/twitter.png";
import Image from "next/image";
import styles from "../../../styles/SocialBar.module.css";

export const SocialBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={facebook} alt="Facebook" />
      </div>
      <div className={styles.img}>
        <Image src={instagram} alt="Instagram" />
      </div>
      <div className={styles.img}>
        <Image src={twitter} alt="Twitter" />
      </div>
    </div>
  );
};
