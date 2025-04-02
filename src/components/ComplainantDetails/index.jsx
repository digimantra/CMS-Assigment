import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ComplainantDetails.scss";
import { ArrowIcon, Button, AlertCircleIcon } from "@cmsgov/design-system";
import {
  indianStatesAndUTs,
  organizationType,
  title,
  cancelHandler,
  previousPageHandler,
} from "../../utils/constants";
import { useStep } from "../../context/StepContext";
import { useFormContext } from "../../context/FormContext";

const ComplainantDetails = () => {
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
    updateFormData("complainantDetails", data);
    navigate("/fae-details");
    goToStep(3);
  };

  return (
    <div className="complaintant-container">
      <h1>Complainant Details</h1>
      <hr className="divider" />
      <div className="form-container">
        <form className="form-body" onSubmit={handleSubmit(onSubmit)}>
          {/* Anonymous Radio Group */}
          <div className="row">
            <div className="left-column">
              <label className="form-label">
                Do you want to remain anonymous during this process?{" "}
                <span>*</span>
              </label>
              <p className="form-description">
                <span>Disclaimer:</span>
                <br />
                If you select yes, CMS will not share your information with the
                Filed Against Entity (FAE) during the investigation process.
                However, information provided in this complaint is subject to
                rules and policies under the Freedom of Information Act (FOIA).
              </p>
            </div>
            <div>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    value="yes"
                    {...register("anonymous", {
                      required: "Select if you want to remain Anonymous.",
                    })}
                    className="radio-input"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    value="no"
                    {...register("anonymous", {
                      required: "Select if you want to remain Anonymous.",
                    })}
                    className="radio-input"
                  />
                  No
                </label>
              </div>
              {errors.anonymous && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.anonymous.message}</p>
                </div>
              )}
            </div>
          </div>

          {/* Organization Name */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                Complainant Organization Name <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={50}
                {...register("organizationName", {
                  required: "Enter the Complainant Organization Name.",
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
              <h4 className="form-input-label">
                Complainant Organization Type
              </h4>
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

          {/* Organization Type (Other) */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                Complainant Organization Type (Other)
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                {...register("organizationTypeOther")}
              />
            </div>
          </div>

          {/* Organization Role */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                Complainant Organization Role
              </h4>
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

          {/* Phone Number */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                Complainant Organization Phone Number <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                maxLength={10} // Restricts input to 10 characters
                placeholder="(xxx) xxx-xxxx"
                {...register("organizationPhone", {
                  required: "Enter the Complainant Organization Phone Number",
                  pattern: {
                    value: /^[0-9]+$/, // Allows only numeric characters
                    message:
                      "Complainant Organization Phone Number must be only digits",
                  },
                  minLength: {
                    value: 10,
                    message:
                      "Complainant Organization Phone Number must be at least 10 digits",
                  },
                })}
              />
              {errors.organizationPhone && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">
                    {errors.organizationPhone.message}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Title */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                Complainant Title <span>*</span>
              </h4>
            </div>
            <div className="box">
              <select
                className="form-input"
                {...register("title", {
                  required: "Select the Complainant's Title.",
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
                Complainant First Name <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={50}
                {...register("firstName", {
                  required: "Enter the Complainant's First Name.",
                  pattern: {
                    value: /^[A-Za-z .,'-]+$/,
                    message:
                      "Only letters, apostrophe ('), period (.), dash (-), comma (,), and space are allowed in Complainant's First Name.",
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
              <h4 className="form-input-label">Complainant MI</h4>
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
                Complainant Last Name <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={50}
                {...register("lastName", {
                  required: "Enter the Complainant's Last Name.",
                  pattern: {
                    value: /^[A-Za-z .,'-]+$/,
                    message:
                      "Only letters, apostrophe ('), period (.), dash (-), comma (,), and space are allowed in Complainant's Last Name.",
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
                Complainant Address Line 1 <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={100}
                {...register("addressLine1", {
                  required: "Enter the Complainant's Address Line 1.",
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
              <h4 className="form-input-label">Complainant Address Line 2</h4>
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
                Complainant City/Town <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={50}
                {...register("city", {
                  required: "Enter the Complainant's City/Town.",
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
                Complainant State/Territory <span>*</span>
              </h4>
            </div>
            <div className="box">
              <select
                className="form-input"
                {...register("state", {
                  required: "Select the Complainant's State/Territory.",
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
                Complainant Zip Code <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                maxLength={5}
                {...register("zipCode", {
                  required: "Enter the Complainant's ZIP Code.",
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
              <h4 className="form-input-label">
                Complainant Email Address <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder=""
                {...register("email", {
                  required: "Enter the Complainant's Email Address.",
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

          {/* Contact Phone Number */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                Complainant Contact Phone Number <span>*</span>
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder="(xxx) xxx-xxxx"
                maxLength={10} // Restricts input to 10 characters
                {...register("contactPhone", {
                  required: "Enter the Complainant's Contact Phone Number.",
                  pattern: {
                    value: /^[0-9]+$/, // Allows only numeric characters
                    message:
                      "Complainant Contact Phone Number must be only digits",
                  },
                  minLength: {
                    value: 10,
                    message:
                      "Complainant Contact Phone Number must be at least 10 digits",
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

          {/* Cell Phone Number */}
          <div className="row">
            <div className="left-column">
              <h4 className="form-input-label">
                Complainant Cell Phone Number
              </h4>
            </div>
            <div className="box">
              <input
                className="form-input"
                type="text"
                placeholder="(xxx) xxx-xxxx"
                maxLength={10}
                {...register("cellPhone", {
                  pattern: {
                    value: /^[0-9]+$/, // Allows only numeric characters
                    message:
                      "Complainant Cell Phone Number must be only digits",
                  },
                  minLength: {
                    value: 10,
                    message:
                      "Complainant Cell Phone Number must be at least 10 digits",
                  },
                })}
              />
              {errors.cellPhone && (
                <div className="error-div">
                  <AlertCircleIcon />
                  <p className="error-message">{errors.cellPhone.message}</p>
                </div>
              )}
            </div>
          </div>

          <div className="button-section">
            <Button
              variation="solid"
              onClick={() =>
                previousPageHandler(navigate, goToStep, "/complaint-type", 1)
              }
              className="welcome-button"
            >
              <ArrowIcon direction="left" />
              Specify Complaint Type
            </Button>
            <Button
              variation="solid"
              onClick={() => cancelHandler(navigate, goToStep)}
            >
              Cancel
            </Button>
            <Button variation="solid" type="submit">
              Filed Against Entity Information <ArrowIcon />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplainantDetails;
