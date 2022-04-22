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
const SurveyA = ({ isNext, setIsNext, surveyA, setSurveyA }) => {
  const onSubmit = (data) => {};
  const { control, watch, handleSubmit, setValue } = useForm();

  let saq1 = watch("saq1");
  let saq2 = watch("saq2");
  let saq3 = watch("saq3");
  let saq4 = watch("saq4");
  let saq5 = watch("saq5");
  let saq6 = watch("saq6");
  let saq7 = watch("saq7");
  let saq8 = watch("saq8");

  console.log("saq2", saq2);

  useEffect(() => {
    saq1?.length > 0 ? setIsNext(true) : setIsNext(false);
    if (surveyA === 2) {
      setValue("saq1", undefined);
    }
  }, [saq1, surveyA]);

  useEffect(() => {
    saq2 ? setIsNext(true) : setIsNext(false);
    if (surveyA === 3) {
      setValue("saq2", undefined);
    }
  }, [saq2, surveyA]);

  useEffect(() => {
    saq3 ? setIsNext(true) : setIsNext(false);
    if (surveyA === 4) {
      setValue("saq3", undefined);
    }
  }, [saq3, surveyA]);

  useEffect(() => {
    saq4 ? setIsNext(true) : setIsNext(false);
    if (surveyA === 5) {
      setValue("saq4", undefined);
    }
  }, [saq4, surveyA]);

  useEffect(() => {
    saq5?.length > 0 ? setIsNext(true) : setIsNext(false);
    if (surveyA === 6) {
      setValue("saq5", undefined);
    }
  }, [saq5, surveyA]);

  useEffect(() => {
    saq6?.length > 0 ? setIsNext(true) : setIsNext(false);
    if (surveyA === 7) {
      setValue("saq6", undefined);
    }
  }, [saq6, surveyA]);

  useEffect(() => {
    saq7 ? setIsNext(true) : setIsNext(false);
    if (surveyA === 8) {
      setValue("saq7", undefined);
    }
  }, [saq7, surveyA]);

  useEffect(() => {
    saq8?.length > 0 ? setIsNext(true) : setIsNext(false);
    if (surveyA === 9) {
      setValue("saq8", undefined);
    }
  }, [saq8, surveyA]);

  return (
    <div className="flex justify-center items-center mt-24">
      <div className="w-1/2 ">
        <h2 className="text-sky-500 font-semibold text-3xl my-6 border-b-2 pb-2">
          Stage 3: Survey A
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {surveyA === 1 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q1: Survey A question 1
              </h4>
              <CheckboxGroupControl
                control={control}
                name="saq1"
                items={options1}
              />
            </div>
          )}

          {surveyA === 2 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q2: Survey A question 2
              </h4>
              <div className="flex gap-3">
                <FieldLabel
                  name="saq2"
                  title="Answer"
                  className="top-3.5"
                  required
                />
                <InputControl control={control} name="saq2" />
              </div>
            </div>
          )}

          {surveyA === 3 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q3: Survey A question 3
              </h4>
              <RadioGroupControl control={control} name="saq3" />
            </div>
          )}

          {surveyA === 4 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q4: Survey A question 4
              </h4>
              <RadioGroupControl control={control} name="saq4" />
            </div>
          )}

          {surveyA === 5 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q5: Survey A question 5
              </h4>
              <CheckboxGroupControl
                control={control}
                name="saq5"
                items={options5}
              />
            </div>
          )}

          {surveyA === 6 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q6: Survey A question 6
              </h4>
              <CheckboxGroupControl
                control={control}
                name="saq6"
                items={options5}
              />
            </div>
          )}

          {surveyA === 7 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q7: Survey A question 7
              </h4>
              <div className="flex gap-3">
                <FieldLabel
                  name="saq7"
                  title="Answer"
                  className="top-3.5"
                  required
                />
                <InputControl control={control} name="saq7" />
              </div>
            </div>
          )}

          {surveyA === 8 && (
            <div className="mb-4">
              <h4 className="text-gray-500 font-semibold text-xl mb-4">
                Q8: Survey A question 8
              </h4>
              <CheckboxGroupControl
                control={control}
                name="saq8"
                items={options5}
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SurveyA;
