import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ArrowIcon, Button, AlertCircleIcon } from "@cmsgov/design-system";
import "./ComplaintType.scss";
import { complaintTypes } from "../../utils/constants";
import { useStep } from "../../context/StepContext";
import { useFormContext } from "../../context/FormContext";

const ComplaintType = () => {
  const { goToStep } = useStep();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate(); // Initialize navigate

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    if (data.complaintType) {
      updateFormData("complaintType", { complaintType: data.complaintType });
      goToStep(2);
      navigate("/complainant-details");
    }
  };

  return (
    <div className="complaint-container">
      <h1>Complaint Type</h1>
      <div>
        <h2>Make a selection below</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            {complaintTypes.map((type) => (
              <label key={type.value} className="list-item">
                <input
                  type="radio"
                  value={type.value}
                  {...register("complaintType", {
                    required: "Please select a complaint type.",
                  })}
                  className="radio-input"
                />
                <div>
                  <h4>{type.label}</h4>
                  <p>{type.description}</p>
                </div>
              </label>
            ))}
          </div>
          {errors.complaintType && (
            <div className="error-div">
              <AlertCircleIcon />
              <p className="error-message">{errors.complaintType.message}</p>
            </div>
          )}
          <div className="button-section">
            <Button variation="solid" href="/" className="welcome-button">
              <ArrowIcon direction="left" /> Welcome
            </Button>
            <Button variation="solid" href="/">
              Cancel
            </Button>
            <Button variation="solid" type="submit">
              Complainant Information <ArrowIcon />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintType;
