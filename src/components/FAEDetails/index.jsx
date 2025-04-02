import React from "react";
import { useForm } from "react-hook-form";
import "./FAEDetails.scss";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { AlertCircleIcon, ArrowIcon, Button } from "@cmsgov/design-system";
import {
  cancelHandler,
  indianStatesAndUTs,
  organizationType,
  title,
  previousPageHandler,
} from "../../utils/constants";
import { useStep } from "../../context/StepContext";
import { useFormContext } from "../../context/FormContext";

const FAEDetails = () => {
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
    updateFormData("faeDetails", data);
    navigate("/complaint-details");
    goToStep(4);
  };

  return (
    <div className="fae-container">
      <h1>FAE Details</h1>
      <hr className="divider" />
      <div className="form-container">
        <form className="form-body" onSubmit={handleSubmit(onSubmit)}>
          {/* Organization Name */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                FAE Organization Name <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={50}
                {...register("organizationName", {
                  required: "Enter the FAE Organization Name.",
                  pattern: {
                    value: /^[A-Za-z .,'-]+$/,
                    message:
                      "Only letters, apostrophe ('), period (.), dash (-), comma (,), and space are allowed in Complainant Organization Name.",
                  },
                })}
              />
              {errors.organizationName && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">
                    {errors.organizationName.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Organization Type */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">FAE Organization Type</h4>
            </div>
            <div className="box">
              <select className="form-input" {...register("organizationType")}>
                <option value="">--None--</option>
                {organizationType?.map((type, index) => (
                  <option value={type} key={index}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Organization Role */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">FAE Organization Role</h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                {...register("organizationRole")}
              />
            </div>
          </div>

          {/* Title */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                FAE Contact Title <span>*</span>
              </h4>
            </div>
            <div className="box">
              <select
                className="form-input"
                {...register("title", {
                  required: "Select the FAE Contact's Title.",
                })}
              >
                <option value="">--None--</option>
                {title?.map((value, index) => (
                  <option value={value} key={index}>
                    {value}
                  </option>
                ))}
              </select>
              {errors.title && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.title.message}</p>
                </div>
              )}
            </div>
          </div>

          {/* First Name */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                FAE Contact First Name <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={50}
                {...register("firstName", {
                  required: "Enter the FAE Contact's First Name.",
                  pattern: {
                    value: /^[A-Za-z .,'-]+$/,
                    message:
                      "Only letters, apostrophe ('), period (.), dash (-), comma (,), and space are allowed in FAE Contact's First Name.",
                  },
                })}
              />
              {errors.firstName && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.firstName.message}</p>
                </div>
              )}
            </div>
          </div>

          {/* MI */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">FAE Contact MI</h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={1}
                {...register("middleInitial")}
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                FAE Contact Last Name <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={50}
                {...register("lastName", {
                  required: "Enter the FAE Contact's Last Name.",
                  pattern: {
                    value: /^[A-Za-z .,'-]+$/,
                    message:
                      "Only letters, apostrophe ('), period (.), dash (-), comma (,), and space are allowed in FAE Contact's Last Name.",
                  },
                })}
              />
              {errors.lastName && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.lastName.message}</p>
                </div>
              )}
            </div>
          </div>

          {/* Address Line 1 */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                FAE Address Line 1 <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={100}
                {...register("addressLine1", {
                  required: "Enter the FAE's Address Line 1.",
                })}
              />
              {errors.addressLine1 && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.addressLine1.message}</p>
                </div>
              )}
            </div>
          </div>

          {/* Address Line 2 */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">FAE Address Line 2</h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={100}
                {...register("addressLine2")}
              />
            </div>
          </div>

          {/* City */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                FAE City/Town <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={50}
                {...register("city", {
                  required: "Enter the FAE's City/Town.",
                })}
              />
              {errors.city && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.city.message}</p>
                </div>
              )}
            </div>
          </div>

          {/* State */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                FAE State/Territory <span>*</span>
              </h4>
            </div>
            <div className="box">
              <select
                className="form-input"
                {...register("state", {
                  required: "Select the FAE's State/Territory.",
                })}
              >
                <option value="">--None--</option>
                {indianStatesAndUTs?.map((state, index) => (
                  <option value={state} key={index}>
                    {state}
                  </option>
                ))}
              </select>
              {errors.state && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.state.message}</p>
                </div>
              )}
            </div>
          </div>

          {/* Zip Code */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                FAE Zip Code <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={5}
                {...register("zipCode", {
                  required: "Enter the FAE's ZIP Code.",
                  pattern: {
                    value: /^[0-9]{5}$/,
                    message: "Enter a valid Complainant ZIP Code.",
                  },
                })}
              />
              {errors.zipCode && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.zipCode.message}</p>
                </div>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">FAE Contact Email Address</h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                {...register("email", {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Enter a valid Complainant's Email Address",
                  },
                })}
              />
              {errors.email && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.email.message}</p>
                </div>
              )}
            </div>
          </div>

          {/* FAE Phone Number */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                FAE Contact Phone Number <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder="(xxx) xxx-xxxx"
                maxLength={10}
                {...register("contactPhone", {
                  required: "Enter the FAE's Contact Phone Number.",
                  pattern: {
                    value: /^[0-9]+$/, // Allows only numeric characters
                    message: "FAE's Contact Phone Number must be only digits",
                  },
                  minLength: {
                    value: 10,
                    message:
                      "FAE's Contact Phone Number must be at least 10 digits",
                  },
                })}
              />
              {errors.contactPhone && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.contactPhone.message}</p>
                </div>
              )}
            </div>
          </div>

          <div className="button-section">
            <Button
              variation="solid"
              onClick={() =>
                previousPageHandler(
                  navigate,
                  goToStep,
                  "/complainant-details",
                  2
                )
              }
              className="welcome-button"
            >
              <ArrowIcon direction="left" />
              Complainant Information
            </Button>
            <Button
              variation="solid"
              onClick={() => cancelHandler(navigate, goToStep)}
            >
              Cancel
            </Button>
            <Button variation="solid" type="submit">
              Complaint Details Information <ArrowIcon />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FAEDetails;
