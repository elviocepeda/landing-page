import React from "react";
import {
  ArrowIcon,
  Button,
  LineBar,
  Paragraph,
  Title,
} from "../../components/atoms";
import { Layout } from "../../components/organisms";
import styles from "../../styles/Services.module.css";

const Services = () => {
  return (
    <Layout>
      <div className={styles.contactus_container}>
        <div className={styles.contactus_img} />
        <div className={styles.contactus}>
          <Title content="Servicios" classname={styles.title} />
          <Paragraph
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            classname={styles.paragraph}
          />
          <Button content="Contáctanos" classname={styles.button} />
          <LineBar classname={styles.h_linebar} />
        </div>
      </div>
      <div className={styles.service_container}>
        <div className={styles.slider_btn}>
          <ArrowIcon classname={styles.slider_btn_left} left />
        </div>
        <div className={styles.service}>
          <Title content="Servicio" classname={styles.service_subtitle} />
          <Paragraph
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing."
            classname={styles.service_paragraph}
          />
        </div>
        <div className={styles.service_img} />
      </div>
    </Layout>
  );
};

export default Services;
