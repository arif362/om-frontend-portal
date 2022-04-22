import { FC } from "react";
import { Controller } from "react-hook-form";
import { Radio, Space } from "antd";

export const RadioGroupControl = ({
  name,
  control,
  errors,
  isDisabled = false,
  direction = "horizontal",
}) => {
  let errMsg = errors?.[name]?.message;

  return (
    <div className="my-select-container">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Radio.Group
            {...field}
            disabled={isDisabled}
            className="!rounded-lg !my-1 !w-full"
            size="large"
          >
            <Space direction={direction}>
              <Radio value={1}>True</Radio>
              <Radio value={2}>False</Radio>
            </Space>
          </Radio.Group>
        )}
      />
      <p className="text-red-600 text-xs">{errMsg}</p>
    </div>
  );
};
