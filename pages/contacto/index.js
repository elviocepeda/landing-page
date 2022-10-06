import React from "react";
import { Button, Paragraph } from "../../components/atoms";
import { Form } from "../../components/molecules";
import { Layout } from "../../components/organisms";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <Form />
        <div className={styles.img}>
          <Paragraph
            content="Estamos cerca de ti,"
            classname={styles.paragraph}
          />
          <Paragraph
            content="para atenderte con calidad y servicio."
            classname={styles.paragraph}
          />
        </div>
        <div className={styles.call_us}>
          <Paragraph content="Llámanos" classname={styles.call_us_paragraph} />
          <Paragraph
            content="+52 56 103 60 443"
            classname={styles.call_us_paragraph}
          />
          <Button content="Enviar un e-mail" classname={styles.btn} />
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
