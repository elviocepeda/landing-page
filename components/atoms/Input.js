import React from "react";

export const Input = ({ classname, onChange, value, type, name }) => {
  return (
    <input
      className={classname}
      onChange={onChange}
      type={type ? type : "text"}
      value={value}
      name={name}
    />
  );
};
