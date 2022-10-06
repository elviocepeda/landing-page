import React from "react";
import {
  ArrowIcon,
  Button,
  LineBar,
  Paragraph,
  Title,
} from "../../components/atoms";
import { Layout } from "../../components/organisms";
import styles from "../../styles/Procedures.module.css";

const Procedures = () => {
  return (
    <Layout>
      <div className={styles.contact_us_container}>
        <div className={styles.contact_us}>
          <div className={styles.contact_us_img} />
        </div>
        <div className={styles.procedure}>
          <Title content="Trámites" classname={styles.title} />
          <Paragraph
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
            classname={styles.paragraph}
          />
          <Button content="Contáctanos" classname={styles.button} />
        </div>
        <LineBar classname={styles.h_linebar} />
      </div>
      <div className={styles.slider_section}>
        <Title
          content="Despacho Fiscal Contable"
          classname={styles.small_title}
        />
        <Title content="Trámite" classname={styles.subtitle} />
        <div className={styles.slider_container}>
          <div className={styles.slider_btn}>
            <ArrowIcon classname={styles.slider_btn_left} left />
          </div>
          <div className={styles.slider_content}>
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
              classname={styles.slider_paragraph}
            />
            <div className={styles.slider_img_container}>
              <LineBar classname={styles.slider_h_linebar} />
              <div className={styles.slider_img} />
            </div>
          </div>
          <div className={styles.slider_btn}>
            <ArrowIcon classname={styles.slider_btn_right} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Procedures;
