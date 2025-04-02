import React from "react";
import { steps } from "../../utils/constants";
import { useStep } from "../../context/StepContext";
import "./StepBar.scss";

const StepBar = () => {
  const { currentStep } = useStep();

  return (
    <div className="stepbar">
      {steps.map((step, index) => {
        let stepClass = "";

        if (index + 1 < currentStep) {
          stepClass = "completed";
        } else if (index + 1 === currentStep) {
          stepClass = "active";
        }

        return (
          <div key={index} className={`step ${stepClass}`}>
            {step}
          </div>
        );
      })}
    </div>
  );
};

export default StepBar;
