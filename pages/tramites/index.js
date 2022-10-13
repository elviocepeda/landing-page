import React from "react";
import Link from "next/link";
import { Button, LineBar, Paragraph, Title } from "../../components/atoms";
import { Layout } from "../../components/organisms";
import styles from "../../styles/Procedures.module.css";
import { Slider } from "./Slider";
import { sliderData } from "./constants";
import { deficoText } from "../../common/constants";

const Procedures = () => {
  return (
    <Layout>
      <div className={styles.contact_us_container}>
        <div className={styles.contact_us}>
          <div className={styles.contact_us_img} />
        </div>
        <div className={styles.procedure}>
          <Title
            content={deficoText.PROCEDURES_TITLE}
            classname={styles.title}
          />
          <Paragraph
            content={deficoText.PROCEDURES_PARAGRAPH}
            classname={styles.paragraph}
          />
          <Link href="/contacto">
            <a>
              <Button
                content={deficoText.CONTACT_US}
                classname={styles.button}
              />
            </a>
          </Link>
        </div>
        <LineBar classname={styles.h_linebar} />
      </div>
      <div className={styles.slider_section}>
        <Title content={deficoText.OFFICE} classname={styles.small_title} />
        <Slider styles={styles} data={sliderData} />
      </div>
    </Layout>
  );
};

export default Procedures;
