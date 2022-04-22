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
const Goals = ({ isNext, setIsNext, goals, setGoals }) => {
  const { control, watch, handleSubmit, setValue } = useForm();
  let gq1 = watch("gq1");
  let gq2 = watch("gq2");
  let gq3 = watch("gq3");
  let gq4 = watch("gq4");
  let gq5 = watch("gq5");
  let gq6 = watch("gq6");

  useEffect(() => {
    gq1?.length > 0 ? setIsNext(true) : setIsNext(false);
    if(goals === 2){
      setValue("gq1", undefined);
    }
  }, [gq1, goals]);

  useEffect(() => {
    gq2?.length > 0 ? setIsNext(true) : setIsNext(false);
    if(goals === 3){
      setValue("gq2", undefined);
    }
  }, [gq2, goals]);

  useEffect(() => {
    gq3?.length > 0 ? setIsNext(true) : setIsNext(false);
    if(goals === 4){
      setValue("gq3", undefined);
    }
  }, [gq3, goals]);

  useEffect(() => {
    gq5?.length > 0 ? setIsNext(true) : setIsNext(false);
    if(goals === 6){
      setValue("gq5", undefined);
    }
  }, [gq5, goals]);

  useEffect(() => {
    gq4 ? setIsNext(true) : setIsNext(false);
    if(goals === 5){
      setValue("gq4", undefined);
    }
  }, [gq4, goals]);

  useEffect(() => {
    gq6 ? setIsNext(true) : setIsNext(false);
    if(goals === 7){
      setValue("gq6", undefined);
    }
  }, [gq6, goals]);



  const onSubmit = (data) => {};
  return (
    <div className="flex justify-center items-center mt-24">
      <div className="w-1/2">
        <h2 className="text-sky-500 font-semibold my-6  border-b-2 pb-2 text-3xl">
          Stage 5: Goals
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {goals === 1 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q1: Goals question 1
              </h4>
              <CheckboxGroupControl
                control={control}
                name="gq1"
                items={options1}
              />
            </div>
          )}

          {goals === 2 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q2: Goals question 2
              </h4>
              <CheckboxGroupControl
                control={control}
                name="gq2"
                items={options5}
              />
            </div>
          )}

          {goals === 3 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q3: Goals question 3
              </h4>
              <CheckboxGroupControl
                control={control}
                name="gq3"
                items={options3}
              />
            </div>
          )}

          {goals === 4 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q4: Goals question 4
              </h4>
              <RadioGroupControl control={control} name="gq4" />
            </div>
          )}

          {goals === 5 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q5: Goals question 5
              </h4>
              <CheckboxGroupControl
                control={control}
                name="gq5"
                items={options5}
              />
            </div>
          )}

          {goals === 6 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q6: Goals question 6
              </h4>
              <RadioGroupControl control={control} name="gq6" />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Goals;
