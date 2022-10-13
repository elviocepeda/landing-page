import React from "react";
import Link from "next/link";
import { Button, LineBar, Paragraph, Title } from "../components/atoms";
import { Layout } from "../components/organisms";
import styles from "../styles/Information.module.css";
import { deficoText } from "../common/constants";

const Information = () => {
  return (
    <Layout>
      <div className={styles.contact_us}>
        <div className={styles.contact_us_img}>
          <div className={styles.card}>
            <Title
              h1
              content={deficoText.OFFICE}
              classname={styles.card_title}
            />
            <Paragraph
              content={deficoText.INFO_PARAGRAPH}
              classname={styles.card_paragraph}
            />
            <Link href="/contacto">
              <a>
                <Button
                  content={deficoText.CONTACT_US}
                  classname={styles.card_button}
                />
              </a>
            </Link>
          </div>
        </div>
        <LineBar classname={styles.v_linebar} />
      </div>
      <div className={styles.who}>
        <div className={styles.who_img} />
        <Title content={deficoText.OFFICE} classname={styles.who_small_title} />
        <Title content={deficoText.INFO_WHO} classname={styles.who_subtitle} />
        <Paragraph
          content={deficoText.INFO_WHO_PARAGRAPH}
          classname={styles.who_paragraph}
        />
        <LineBar classname={styles.h_linebar} />
      </div>
      <div className={styles.text}>
        <Paragraph
          content={deficoText.INFO_TEXT_PARAGRAPH}
          classname={styles.text_paragraph}
        />
        <div className={styles.text_titlebar}>
          <Title
            content={deficoText.OFFICE}
            classname={styles.text_titlebar_title}
          />
          <LineBar classname={styles.small_linebar} />
        </div>
      </div>
    </Layout>
  );
};

export default Information;
