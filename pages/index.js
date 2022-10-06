import React from "react";
import { Button, LineBar, Paragraph, Title } from "../components/atoms";
import { Layout } from "../components/organisms";
import styles from "../styles/Information.module.css";

const Information = () => {
  return (
    <Layout>
      <div className={styles.contact_us}>
        <div className={styles.card}>
          <Title
            h1
            content="Despacho Fiscal Contable"
            classname={styles.card_title}
          />
          <Paragraph
            content="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry."
            classname={styles.card_paragraph}
          />
          <Button content="Contáctanos" classname={styles.card_button} />
        </div>
        <div className={styles.contact_us_img} />
        <LineBar classname={styles.v_linebar} />
      </div>
      <div className={styles.who}>
        <div className={styles.who_img} />
        <Title
          content="Despacho Fiscal Contable"
          classname={styles.who_small_title}
        />
        <Title content="¿Quienes somos?" classname={styles.who_subtitle} />
        <Paragraph
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum."
          classname={styles.who_paragraph}
        />

        <LineBar classname={styles.h_linebar} />
      </div>
      <div className={styles.text}>
        <Paragraph
          content="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry."
          classname={styles.text_paragraph}
        />
        <div className={styles.text_titlebar}>
          <Title
            content="Despacho Fiscal Contable"
            classname={styles.text_titlebar_title}
          />
          <LineBar classname={styles.small_linebar} />
        </div>
      </div>
    </Layout>
  );
};

export default Information;
