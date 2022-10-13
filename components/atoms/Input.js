import React from "react";
import { useFormContext } from "react-hook-form";

export const Input = ({
  classname,
  onChange,
  value,
  type,
  name,
  label,
  required,
}) => {
  const { register } = useFormContext();
  return (
    <input
      className={classname}
      onChange={onChange}
      type={type ? type : "text"}
      value={value}
      name={name}
      label={label}
      {...register(label, { required })}
    />
  );
};
