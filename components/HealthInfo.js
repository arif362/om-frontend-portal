import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  CheckboxGroupControl,
  RadioGroupControl,
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
const HealthInfo = ({
  isNext,
  setIsNext,
  healthInfoValue,
  setHealthInfoValue,
}) => {
  const { control, watch, handleSubmit , setValue} = useForm();
  let hq1 = watch("hq1");
  let hq2 = watch("hq2");
  let hq3 = watch("hq3");
  let hq4 = watch("hq4");
  let hq5 = watch("hq5");
  
  useEffect(() => {
    hq1?.length > 0 ? setIsNext(true) : setIsNext(false);
    if(healthInfoValue === 2){
      setValue("hq1", undefined);
    }
  }, [hq1, healthInfoValue]);
  
  useEffect(() => {
    hq3?.length > 0 ? setIsNext(true) : setIsNext(false);
    if(healthInfoValue === 4){
      setValue("hq3", undefined);
    }
  }, [hq3, healthInfoValue]);
  
  useEffect(() => {
    hq5?.length > 0 ? setIsNext(true) : setIsNext(false);
    if(healthInfoValue === 6){
      setValue("hq5", undefined);
    }
  }, [hq5,healthInfoValue]);
  
  useEffect(() => {
    hq2 ? setIsNext(true) : setIsNext(false);
    if(healthInfoValue === 3){
      setValue("hq2", undefined);
    }
  }, [hq2,healthInfoValue]);


  useEffect(() => {
    hq4 ? setIsNext(true) : setIsNext(false);
    if(healthInfoValue === 5){
      setValue("hq4", undefined);
    }
  }, [hq4,healthInfoValue]);


  const onSubmit = (data) => {};
  return (
    <div className="flex justify-center items-center mt-24">
      <div className="w-1/2 ">
        <h2 className="text-sky-500 font-semibold  my-6  border-b-2 pb-2 text-3xl">
          Stage 2: HealthInfo
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {healthInfoValue === 1 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q1: HealthInfo question 1
              </h4>
              <CheckboxGroupControl
                control={control}
                name="hq1"
                items={options1}
              />
            </div>
          )}
          {healthInfoValue === 2 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q2: HealthInfo question 2
              </h4>
              <RadioGroupControl control={control} name="hq2" />
            </div>
          )}
          {healthInfoValue === 3 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q3: HealthInfo question 3
              </h4>
              <CheckboxGroupControl
                control={control}
                name="hq3"
                items={options3}
              />
            </div>
          )}
          {healthInfoValue === 4 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q4: HealthInfo question 4
              </h4>
              <RadioGroupControl control={control} name="hq4" />
            </div>
          )}
          {healthInfoValue === 5 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q5: HealthInfo question 5
              </h4>
              <CheckboxGroupControl
                control={control}
                name="hq5"
                items={options5}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default HealthInfo;
