import React, { useEffect } from "react";
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
const SurveyB = ({ isNext, setIsNext, surveyB, setSurveyB }) => {
  const { control, watch, handleSubmit, setValue} = useForm();
  let sbq1 = watch("sbq1");
  let sbq2 = watch("sbq2");
  let sbq3 = watch("sbq3");
  let sbq4 = watch("sbq4");
  let sbq5 = watch("sbq5");

  useEffect(() => {
    sbq1 ? setIsNext(true) : setIsNext(false);
    if (surveyB === 2) {
      setValue("sbq1", undefined);
    }
  }, [sbq1, surveyB]);

  useEffect(() => {
    sbq2 ? setIsNext(true) : setIsNext(false);
    if (surveyB === 3) {
      setValue("sbq2", undefined);
    }
  }, [sbq2, surveyB]);

  useEffect(() => {
    sbq3?.length > 0 ? setIsNext(true) : setIsNext(false);
    if (surveyB === 4) {
      setValue("sbq3", undefined);
    }
  }, [sbq3, surveyB]);

  useEffect(() => {
    sbq4 ? setIsNext(true) : setIsNext(false);
    if (surveyB === 5) {
      setValue("sbq4", undefined);
    }
  }, [sbq4, surveyB]);

  useEffect(() => {
    sbq5 ? setIsNext(true) : setIsNext(false);
    if (surveyB === 6) {
      setValue("sbq5", undefined);
    }
  }, [sbq5, surveyB]);

  const onSubmit = (data) => {};
  return (
    <div className="flex justify-center items-center mt-24">
      <div className="w-1/2 ">
        <h2 className="text-sky-500 font-semibold text-3xl my-6  border-b-2 pb-2">
          Stage 4: Survey B
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {surveyB === 1 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q1: Survey B question 1
              </h4>
              <RadioGroupControl control={control} name="sbq1" />
            </div>
          )}

          {surveyB === 2 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q2: Survey B question 2
              </h4>
              <div className="flex gap-3">
                <FieldLabel
                  name="sbq2"
                  title="Answer"
                  className="top-3.5"
                  required
                />
                <InputControl control={control} name="sbq2" />
              </div>
            </div>
          )}

          {surveyB === 3 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q3: Survey B question 3
              </h4>
              <CheckboxGroupControl
                control={control}
                name="sbq3"
                items={options3}
              />
            </div>
          )}

          {surveyB === 4 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q4: SurveyB question 4
              </h4>
              <RadioGroupControl control={control} name="sbq4" />
            </div>
          )}

          {surveyB === 5 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q5: SurveyB question 5
              </h4>
              <CheckboxGroupControl
                control={control}
                name="sbq5"
                items={options5}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SurveyB;
