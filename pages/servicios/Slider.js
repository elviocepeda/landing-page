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

  const handleSlide = (slide) => {
    if (slide === limit) {
      slide = 1;
      setSlide(slide);
    } else setSlide(slide + 1);
  };

  const handleTouch = (slide) => handleSlide(slide);

  return (
    <>
      <div
        className={styles.service_container}
        onTouchStart={() => handleTouch(slide)}
      >
        <div className={styles.slider_btn} onClick={() => handleSlide(slide)}>
          <ArrowIcon classname={styles.slider_btn_left} left />
        </div>
        <div className={styles.service}>
          <Title
            content={visible?.sliderTitle}
            classname={styles.service_subtitle}
          />
          <Paragraph
            content={visible?.sliderParagraph}
            classname={styles.service_paragraph}
          />
          <div className={styles.slider_dots}>
            {data.map((item) => {
              const { id } = item;
              return (
                <div
                  className={
                    slide === id
                      ? `${styles.slider_dot_center} ${styles.active_dot}`
                      : styles.slider_dot_center
                  }
                ></div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.service_img_linebar_wrapper}>
        <div className={styles.service_img_container}>
          <LineBar classname={styles.service_h_linebar} />
          <div style={style} className={styles.image} />
        </div>
      </div>
    </>
  );
};
