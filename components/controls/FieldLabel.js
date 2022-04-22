import { FC } from "react";

export const FieldLabel = ({
  name,
  title,
  required = false,
  className = "",
}) => {
  return (
    <label
      htmlFor={name}
      className={` whitespace-nowrap relative ${className}`}
    >
      {title} {required && <span className="text-red-700">*</span>}
    </label>
  );
};
