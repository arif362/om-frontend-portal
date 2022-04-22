import { FC } from "react";
import { Controller } from "react-hook-form";
import { Input } from "antd";


export const InputControl= ({
  name,
  type = "text",
  control,
  errors,
  isDisabled = false,
  placeholder = "",
  className = "",
}) => {
  let errMsg = errors?.[name]?.message;
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input
            allowClear
            {...field}
            type={type}
            id={name}
            className={`!rounded-lg !my-1 ${className}`}
            status={errMsg && "error"}
            size="large"
            disabled={isDisabled}
            placeholder={placeholder}
          />
        )}
      />
      <p className="text-red-600 text-xs">{errMsg}</p>
    </div>
  );
};
