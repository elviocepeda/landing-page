import React from "react";
import Link from "next/link";
import { Button, LineBar, Paragraph, Title } from "../../components/atoms";
import { Layout } from "../../components/organisms";
import styles from "../../styles/Services.module.css";
import { sliderData } from "./constants";
import { Slider } from "./Slider";
import { deficoText } from "../../common/constants";

const Services = () => {
  return (
    <Layout>
      <div className={styles.contact_us_container}>
        <div className={styles.contact_us_img} />
        <div className={styles.contact_us}>
          <Title content={deficoText.SERVICES_TITLE} classname={styles.title} />
          <Paragraph
            content={deficoText.SERVICES_PARAGRAPH}
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
          <LineBar classname={styles.h_linebar} />
        </div>
      </div>
      <Slider styles={styles} data={sliderData} />
    </Layout>
  );
};

export default Services;
