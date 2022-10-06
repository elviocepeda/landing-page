import React from "react";
import ArrowLeft from "../../images/arrow-left.png";
import ArrowRight from "../../images/arrow-right.png";
import Image from "next/image";

export const ArrowIcon = ({ classname, left }) => {
  return (
    <div className={classname}>
      <Image src={left ? ArrowLeft : ArrowRight} alt="" />
    </div>
  );
};
