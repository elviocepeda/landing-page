import React from "react";
import { deficoText } from "../../common/constants";
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
            content={deficoText.CONTACT_PARAGRAPH_PT1}
            classname={styles.paragraph}
          />
          <Paragraph
            content={deficoText.CONTACT_PARAGRAPH_PT2}
            classname={styles.paragraph}
          />
        </div>
        <div className={styles.call_us}>
          <Paragraph
            content={deficoText.CONTACT_CALL_US}
            classname={styles.call_us_paragraph}
          />
          <Paragraph
            content={deficoText.CONTACT_CALL_US_PHONE}
            classname={styles.call_us_paragraph}
          />
          <a href="#">
            <Button
              content={deficoText.CONTACT_SEND_AN_EMAIL}
              classname={styles.btn}
            />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
