import { FC } from "react";
import { Controller } from "react-hook-form";
import { Checkbox, Space } from "antd";

export const CheckboxGroupControl = ({
  name,
  control,
  items,
  errors,
  isDisabled = false,
  direction = "vertical",
  className = "",
}) => {
  let errMsg = errors?.[name]?.message;

  return (
    <div className="my-select-container">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Checkbox.Group
            {...field}
            disabled={isDisabled}
            className={`!rounded-lg !my-1 ${className}`}
          >
            <Space direction={direction}>
              {items?.length > 0 && (
                <>
                  {items.map((item, index) => (
                    <Checkbox key={index} value={item?.value}>
                      <span>{item?.label}</span>
                    </Checkbox>
                  ))}
                </>
              )}
            </Space>
          </Checkbox.Group>
        )}
      />
      <p className="text-red-600 text-xs">{errMsg}</p>
    </div>
  );
};
