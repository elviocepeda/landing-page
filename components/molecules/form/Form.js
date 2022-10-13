import { Paragraph, Title } from "../../atoms";
import styles from "../../../styles/Form.module.css";
import schema from "./schema";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { emailCredentials } from "./constants";
import { deficoText } from "../../../common/constants";

export const Form = () => {
  const [emailResponse, setEmailResponse] = useState(null);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = emailCredentials;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setEmailResponse(result);
      },
      (error) => {
        setEmailResponse(error);
      }
    );
  };
  return (
    <div className={styles.container}>
      <Title content={deficoText.CONTACT_US} classname={styles.title} />
      <form
        ref={form}
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Paragraph
            content={deficoText.FORM_NAME_LABEL}
            classname={styles.paragraph}
          />
          <input
            type="text"
            name="name"
            {...register("name")}
            className={styles.input}
          />
          <Paragraph
            content={errors.name?.message}
            classname={styles.paragraph_error}
          />
        </div>
        <div>
          <Paragraph
            content={deficoText.FORM_PHONE_LABEL}
            classname={styles.paragraph}
          />
          <input
            type="text"
            name="phone"
            {...register("phone")}
            className={styles.input}
          />
          <Paragraph
            content={errors.phone?.message}
            classname={styles.paragraph_error}
          />
        </div>
        <div>
          <Paragraph
            content={deficoText.FORM_EMAIL_LABEL}
            classname={styles.paragraph}
          />
          <input
            type="text"
            name="email"
            {...register("email")}
            className={styles.input}
          />
          <Paragraph
            content={errors.email?.message}
            classname={styles.paragraph_error}
          />
        </div>
        <div>
          <Paragraph
            content={deficoText.FORM_COMPANY_LABEL}
            classname={styles.paragraph}
          />
          <input
            type="text"
            name="companyName"
            {...register("companyName")}
            className={styles.input}
          />
        </div>
        <div>
          <Paragraph
            content={deficoText.FORM_CONTACTWAY_LABEL}
            classname={styles.paragraph}
          />
          <div className={styles.radio_container}>
            <div className={styles.radio_container_div}>
              <input
                type="radio"
                value="email"
                checked={true}
                {...register("contactWay")}
                className={styles.radio}
              />
              <Paragraph
                content={deficoText.FORM_RADIO_EMAIL}
                classname={styles.radio_paragraph}
              />
            </div>
            <div className={styles.radio_container_div}>
              <input
                type="radio"
                value="phone"
                {...register("contactWay")}
                className={styles.radio}
              />
              <Paragraph
                content={deficoText.FORM_RADIO_PHONE}
                classname={styles.radio_paragraph}
              />
            </div>
            <div className={styles.radio_container_div}>
              <input
                type="radio"
                value="whatsapp"
                {...register("contactWay")}
                className={styles.radio}
              />
              <Paragraph
                content={deficoText.FORM_RADIO_WHATSAPP}
                classname={styles.radio_paragraph}
              />
            </div>
          </div>
        </div>
        <div>
          <Paragraph
            content={deficoText.FORM_REASON_LABEL}
            classname={styles.paragraph}
          />
          <select
            label="reason"
            name="reason"
            {...register("reason")}
            className={styles.select}
          >
            <option value="option1">Opción 1</option>
            <option value="option2">Opción 2</option>
            <option value="option3">Opción 3</option>
            <option value="option4">Opción 4</option>
          </select>
        </div>
        <input
          type="textarea"
          name="message"
          {...register("message")}
          className={styles.input_textarea}
        />
        {emailResponse?.status === 200 && (
          <Paragraph
            content={deficoText.FORM_EMAILJS_SUCCESS}
            classname={styles.paragraph_success}
          />
        )}
        {emailResponse?.status === 400 && (
          <Paragraph
            content={deficoText.FORM_EMAILJS_ERROR}
            classname={styles.paragraph_error}
          />
        )}
        <div className={styles.input_submit_container}>
          <input
            type="submit"
            value={deficoText.FORM_SUBMIT}
            className={styles.input_submit}
          />
        </div>
      </form>
    </div>
  );
};
