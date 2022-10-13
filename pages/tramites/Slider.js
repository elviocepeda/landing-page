import React, { useState } from "react";
import { ArrowIcon, LineBar, Paragraph, Title } from "../../components/atoms";

export const Slider = ({ styles, data }) => {
  const [slide, setSlide] = useState(1);
  const visible = data?.find((item) => item.id == slide);
  const limit = data.length;
  const style = {
    backgroundImage: `url(${visible?.sliderImage.src})`,
    backgroundSize: "cover",
  };

  const handleClickLeft = (slide) => {
    if (slide === 1) {
      slide = limit;
      setSlide(slide);
    } else setSlide(slide - 1);
  };

  const handleClickRight = (slide) => {
    if (slide === limit) {
      slide = 1;
      setSlide(slide);
    } else setSlide(slide + 1);
  };

  const handleTouch = (slide) => handleClickRight(slide);

  return (
    <div
      className={styles.slider_container}
      onTouchStart={() => handleTouch(slide)}
    >
      <div className={styles.slider_content}>
        <Title content={visible?.sliderTitle} classname={styles.subtitle} />
        <Paragraph
          content={visible?.sliderParagraph}
          classname={styles.slider_paragraph}
        />
        <div className={styles.slider_dots}>
          {data.map((item) => {
            const { id } = item;
            return (
              <div
                key={id}
                className={
                  slide === id
                    ? `${styles.slider_dot_center} ${styles.active_dot}`
                    : styles.slider_dot_center
                }
              ></div>
            );
          })}
        </div>
        <div className={styles.slider_slide_flex}>
          <div
            className={styles.slider_btn_container}
            onClick={() => handleClickLeft(slide)}
          >
            <ArrowIcon classname={styles.slider_btn_left} left />
          </div>
          <div className={styles.slider_img_section}>
            <div className={styles.slider_img_container}>
              <LineBar classname={styles.slider_h_linebar} />
              <div style={style} className={styles.image} />
            </div>
          </div>
          <div
            className={styles.slider_btn_container}
            onClick={() => handleClickRight(slide)}
          >
            <ArrowIcon classname={styles.slider_btn_right} />
          </div>
        </div>
      </div>
    </div>
  );
};
