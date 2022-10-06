import { useState } from "react";
import { Input, Paragraph, Title } from "../../atoms";
import styles from "../../../styles/Form.module.css";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  companyName: "",
  contactType: "",
  requeriment: "",
  comment: "",
};

export const Form = () => {
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  console.log(form);
  return (
    <div className={styles.container}>
      <Title content="Contáctanos" classname={styles.title} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <Paragraph content="Nombre*" classname={styles.paragraph} />
          <Input
            onChange={handleChange}
            type="text"
            classname={styles.input}
            name="name"
          />
        </div>
        <div>
          <Paragraph
            content="Teléfono (10 dígitos)*"
            classname={styles.paragraph}
          />
          <Input
            onChange={handleChange}
            type="text"
            classname={styles.input}
            name="phone"
          />
        </div>
        <div>
          <Paragraph
            content="Correo electrónico*"
            classname={styles.paragraph}
          />
          <Input
            onChange={handleChange}
            type="text"
            classname={styles.input}
            name="email"
          />
        </div>
        <div>
          <Paragraph
            content="¿Cuál es el nombre de tu empresa?"
            classname={styles.paragraph}
          />
          <Input
            onChange={handleChange}
            type="text"
            classname={styles.input}
            name="companyName"
          />
        </div>
        <div>
          <Paragraph
            content="¿Cómo prefieres que te contactemos?"
            classname={styles.paragraph}
          />
          <div className={styles.radio_container}>
            <div className={styles.radio_container_div}>
              <Input
                onChange={handleChange}
                type="radio"
                classname={styles.radio}
                value="email"
                name="contactType"
              />
              <Paragraph content="Email" classname={styles.radio_paragraph} />
            </div>
            <div className={styles.radio_container_div}>
              <Input
                onChange={handleChange}
                type="radio"
                classname={styles.radio}
                value="phone"
                name="contactType"
              />
              <Paragraph
                content="Teléfono"
                classname={styles.radio_paragraph}
              />
            </div>
            <div className={styles.radio_container_div}>
              <Input
                onChange={handleChange}
                type="radio"
                classname={styles.radio}
                value="whatsapp"
                name="contactType"
              />
              <Paragraph
                content="Whatsapp"
                classname={styles.radio_paragraph}
              />
            </div>
          </div>
        </div>
        <div>
          <Paragraph
            content="¿Cuál es tu necesidad?"
            classname={styles.paragraph}
          />
          <Input
            onChange={handleChange}
            type="text"
            value=""
            classname={styles.input}
          />
        </div>
        <Input
          onChange={handleChange}
          type="textarea"
          value=""
          classname={styles.input_textarea}
        />
        <div className={styles.input_submit_container}>
          <Input type="submit" value="Enviar" classname={styles.input_submit} />
        </div>
      </form>
    </div>
  );
};
