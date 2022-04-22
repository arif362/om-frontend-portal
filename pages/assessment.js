import React, { useEffect, useState } from "react";
import Demographics from "../components/Demographics";
import HealthInfo from "../components/HealthInfo";
import SurveyA from "../components/SurveyA";
import SurveyB from "../components/SurveyB";
import Goals from "../components/Goals";
import { useForm } from "react-hook-form";
import { FieldLabel, InputControl } from "../components/controls/FormControl";
import { Progress } from "antd";

const assessment = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [stage, setStage] = useState(1);
  const [isNext, setIsNext] = useState(false);
  const [demographicsValue, setDemographicsValue] = useState(1);
  const [healthInfoValue, setHealthInfoValue] = useState(1);
  const [surveyA, setSurveyA] = useState(1);
  const [surveyB, setSurveyB] = useState(1);
  const [goals, setGoals] = useState(1);

  const [msg, setMsg] = useState("");

  console.log("totalScore", totalScore);
  console.log("stage", stage);
  console.log("demographicsValue", demographicsValue);
  console.log("healthInfoValue", healthInfoValue);
  console.log("surveyA", surveyA);
  console.log("******************");

  useEffect(() => {
    setProgressValue(3.45 * totalScore);
  }, [totalScore]);

  const handleIncrement = () => {
    setTotalScore(totalScore + 1);
    if (stage === 1) {
      setDemographicsValue(demographicsValue + 1);
    }
    if (stage === 2) {
      setHealthInfoValue(healthInfoValue + 1);
    }
    if (stage === 3) {
      setSurveyA(surveyA + 1);
    }

    if (stage === 4) {
      setSurveyB(surveyB + 1);
    }
    if (stage === 5) {
      setGoals(goals + 1);
    }
    if (stage === 6) {
      // setSurveyA(surveyA + 1);
    }

    if (demographicsValue === 5 && healthInfoValue === 1) {
      setStage(2);
    }

    if (healthInfoValue === 5 && surveyA === 1) {
      setStage(3);
    }

    if (surveyA === 8 && surveyB === 1) {
      setStage(4);
    }
    if (surveyB === 5 && goals === 1) {
      setStage(5);
    }

    if (goals === 6) {
      setStage(6);
    }
  };
  const handleDecrement = () => {
    setTotalScore(totalScore - 1);
    setStage(stage - 1);
    setDemographicsValue(demographicsValue - 1);
    setHealthInfoValue(healthInfoValue - 1);
  };

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data?.email) {
      setMsg(
        `Thank you for your email submission. Please check your email address.`
      );
    }
  };
  return (
    <div>
      {stage < 6 && (
        <div className="flex justify-center mt-12">
          <div className="w-1/2">
            <h4 className="text-green-600 text-xl font-semibold">
              Total Completed (%)
            </h4>
            <Progress
              percent={totalScore === 29 ? 100 : progressValue.toFixed(2)}
            />
          </div>
        </div>
      )}
      <div>
        {stage === 1 && (
          <Demographics
            isNext={isNext}
            setIsNext={setIsNext}
            demographicsValue={demographicsValue}
            setDemographicsValue={setDemographicsValue}
          />
        )}
        {stage === 2 && (
          <HealthInfo
            isNext={isNext}
            setIsNext={setIsNext}
            healthInfoValue={healthInfoValue}
            setHealthInfoValue={setHealthInfoValue}
          />
        )}
        {stage === 3 && (
          <SurveyA
            isNext={isNext}
            setIsNext={setIsNext}
            surveyA={surveyA}
            setSurveyA={setSurveyA}
          />
        )}
        {stage === 4 && (
          <SurveyB
            isNext={isNext}
            setIsNext={setIsNext}
            surveyB={surveyB}
            setSurveyB={setSurveyB}
          />
        )}
        {stage === 5 && (
          <Goals
            isNext={isNext}
            setIsNext={setIsNext}
            goals={goals}
            setGoals={setGoals}
          />
        )}

        {stage < 6 ? (
          <div className="text-center mt-4">
            {/* {totalScore > 0 && (
              <button
                onClick={handleDecrement}
                // disabled={!isNext}
                className="bg-green-700 text-white py-2 px-4 rounded shadow-sm disabled:bg-green-200 mr-12"
              >
                Previous
              </button>
            )} */}

            <button
              onClick={handleIncrement}
              disabled={!isNext}
              className="bg-green-700 text-white py-2 px-4 rounded shadow-sm disabled:bg-green-200"
            >
              Next
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="w-1/2 mt-20">
              {msg && (
                <div className="bg-green-200 text-green-800  py-4 px-6 rounded-lg my-8">
                  {msg}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} cl>
                <h4 className="text-sky-700 text-xl font-semibold my-4 pb-2 border-b-2">
                  Please submit your email for view assessment result.
                </h4>
                <div>
                  <InputControl
                    control={control}
                    name="email"
                    type="email"
                    placeholder="e.g.john@gmail.com"
                  />
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-sky-700 text-white py-2 px-4 rounded shadow-sm w-full"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default assessment;
