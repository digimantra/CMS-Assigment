import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ComplaintDetails.scss";
import { AlertCircleIcon, ArrowIcon, Button } from "@cmsgov/design-system";
import { useStep } from "../../context/StepContext";
import {
  cancelHandler,
  previousPageHandler,
  codeSet,
} from "../../utils/constants";
import { useFormContext } from "../../context/FormContext";

const ComplaintDetails = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { goToStep } = useStep();
  const { updateFormData } = useFormContext();
  const navigate = useNavigate(); // Initialize navigate

  // Form submit handler
  const onSubmit = (data) => {
    updateFormData("complaintDetails", data);
    navigate("/review-complaint");
    goToStep(5);
  };

  return (
    <div className="complaint-details-container">
      <h1>Complaint Details</h1>
      <hr className="divider" />
      <div className="form-container">
        <form className="form-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                Incident occured date <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="date"
                placeholder=""
                {...register("incidentDate", {
                  required: "Enter the Incident Occurred Date.",
                  max: {
                    value: new Date().toISOString().split("T")[0], // Today's date in YYYY-MM-DD forma
                    message: "Incident Occurred Date cannot be a future date.",
                  },
                })}
              />
              {errors.incidentDate && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.incidentDate.message}</p>
                </div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                Complaint Subject <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                {...register("subject", {
                  required: "Enter the Complaint Subject.",
                })}
              />
              {errors.subject && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.subject.message}</p>
                </div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                Complaint Description <span>*</span>
              </h4>
            </div>
            <div className="box">
              <textarea
                className="form-input"
                type="text"
                placeholder=""
                {...register("description", {
                  required: "Enter the Complaint Description.",
                })}
                rows={5}
              />
              {errors.description && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.description.message}</p>
                </div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">Complaint Code Set</h4>
            </div>
            <div className="box">
              <select className="form-input" {...register("codeSet")}>
                <option value="">--None--</option>
                {codeSet?.map((code, index) => (
                  <option key={index} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                Does the complaint relate to the FAE charging fees to conduct
                standard transactions? <span>*</span>
              </h4>
            </div>
            <div className="box">
              <select
                className="form-input"
                {...register("chargingFees", {
                  required:
                    "Select if the complaint deals with charging fees for standard transactions.",
                })}
              >
                <option value="">--None--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              {errors.chargingFees && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.chargingFees.message}</p>
                </div>
              )}
            </div>
          </div>

          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">Attempted to Resolve</h4>
            </div>
            <div className="box">
              <select className="form-input" {...register("resolve")}>
                <option value="">--None--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                Complainant Action Description
              </h4>
            </div>
            <div className="box">
              <textarea
                className="form-input"
                type="text"
                placeholder=""
                {...register("actionDescription")}
                rows={5}
              />
            </div>
          </div>

          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                Complaint Previously submitted
              </h4>
            </div>
            <div className="box">
              <select
                className="form-input"
                {...register("complaintSubmitted")}
              >
                <option value="">--None--</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="button-section">
            <Button
              variation="solid"
              onClick={() =>
                previousPageHandler(navigate, goToStep, "/fae-details", 3)
              }
              className="welcome-button"
            >
              <ArrowIcon direction="left" />
              Filed Against Entity Information
            </Button>
            <Button
              variation="solid"
              onClick={() => cancelHandler(navigate, goToStep)}
            >
              Cancel
            </Button>
            <Button variation="solid" type="submit">
              Complaint Review <ArrowIcon />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintDetails;
