import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  CheckboxGroupControl,
  RadioGroupControl,
  InputControl,
  FieldLabel,
} from "./controls/FormControl";

const options1 = [
  { label: "Answer A", value: "1" },
  { label: "Answer B", value: "2" },
  { label: "Answer C", value: "3" },
  { label: "Answer A & C", value: "4" },
];
const options2 = [
  { label: "Answer A", value: "1" },
  { label: "Answer B", value: "2" },
  { label: "Answer C", value: "3" },
  { label: "Answer A & C", value: "4" },
];
const options3 = [
  { label: "Answer A", value: "1" },
  { label: "Answer B", value: "2" },
  { label: "Answer C", value: "3" },
  { label: "None of them", value: "4" },
];
const options4 = [
  { label: "Answer A", value: "1" },
  { label: "Answer B", value: "2" },
  { label: "Answer C", value: "3" },
  { label: "Answer A & C", value: "4" },
];
const options5 = [
  { label: "Answer A", value: "1" },
  { label: "Answer B", value: "2" },
  { label: "Answer A & B", value: "3" },
  { label: "None of them", value: "4" },
];
const Demographics = ({
  isNext,
  setIsNext,
  demographicsValue,
  setDemographicsValue,
}) => {
  const { control, watch, handleSubmit, setValue } = useForm();

  let dq1 = watch("dq1");
  let dq2 = watch("dq2");
  let dq3 = watch("dq3");
  let dq4 = watch("dq4");
  let dq5 = watch("dq5");

  useEffect(() => {
    dq1?.length > 0 ? setIsNext(true) : setIsNext(false);
    if(demographicsValue === 2){
      setValue("dq1", undefined);
    }

  }, [dq1, demographicsValue]);

  useEffect(() => {
    dq2 ? setIsNext(true) : setIsNext(false);
    if(demographicsValue === 3){
      setValue("dq2", undefined);
    }
  }, [dq2, demographicsValue]);

  useEffect(() => {
    dq3?.length > 0 ? setIsNext(true) : setIsNext(false);
    if(demographicsValue === 4){
      setValue("dq3", undefined);
    }
  }, [dq3, demographicsValue]);

  useEffect(() => {
    dq4 ? setIsNext(true) : setIsNext(false);
    if(demographicsValue === 5){
      setValue("dq4", undefined);
    }
  }, [dq4, demographicsValue]);

  useEffect(() => {
    dq5?.length > 0 ? setIsNext(true) : setIsNext(false);
    if(demographicsValue === 6){
      setValue("dq5", undefined);
    }
  }, [dq5, demographicsValue]);

  const onSubmit = (data) => {};
  return (
    <div className="flex justify-center items-center mt-24">
      <div className="w-1/2 ">
        <h2 className="text-sky-500 font-semibold text-3xl my-6  border-b-2 pb-2">
          Stage 1: Demographics
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {demographicsValue === 1 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q1: Demographics question 1
              </h4>
              <CheckboxGroupControl
                control={control}
                name="dq1"
                items={options1}
              />
            </div>
          )}
          {demographicsValue === 2 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q2: Demographics question 2
              </h4>
              <RadioGroupControl control={control} name="dq2" />
            </div>
          )}
          {demographicsValue === 3 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q3: Demographics question 3
              </h4>
              <CheckboxGroupControl
                control={control}
                name="dq3"
                items={options3}
              />
            </div>
          )}
          {demographicsValue === 4 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q4: Demographics question 4
              </h4>
              <div className="flex gap-3">
                <FieldLabel
                  name="dq4"
                  title="Answer"
                  className="top-3.5"
                  required
                />
                <InputControl control={control} name="dq4" />
              </div>
            </div>
          )}

          {demographicsValue === 5 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q5: Demographics question 5
              </h4>
              <CheckboxGroupControl
                control={control}
                name="dq5"
                items={options5}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Demographics;
