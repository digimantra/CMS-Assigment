import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./ReviewComplaint.scss";
import { ArrowIcon, Button } from "@cmsgov/design-system";
import { useStep } from "../../context/StepContext";
import { cancelHandler, previousPageHandler } from "../../utils/constants";
import { useFormContext } from "../../context/FormContext";

const ReviewComplaint = () => {
  const { goToStep } = useStep();
  const navigate = useNavigate(); // Initialize navigate
  const { formData } = useFormContext();

  console.log(formData, "formdata");

  // Form submit handler
  const onSubmit = () => {
    navigate("/submit");
    goToStep(6);
  };

  return (
    <div className="review-container">
      <h1>Reviewing the Complaint</h1>
      <hr className="divider" />
      <div className="form-container">
        <h2>Complaint Details</h2>
        <div className="form-body">
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Complaint Type</h4>
              </div>
              <p className="value">{formData?.complaintType?.complaintType}</p>
            </div>

            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Complaint Subject</h4>
              </div>
              <p className="value">{formData?.complaintDetails?.subject}</p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Incident occured date</h4>
              </div>
              <p className="value">
                {formData?.complaintDetails?.incidentDate}
              </p>
            </div>
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">
                  Complaint Unique Identifier Type
                </h4>
              </div>
              <p></p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">
                  Charging Fee to Conduct Transaction?
                </h4>
              </div>
              <p className="value">
                {formData?.complaintDetails?.chargingFees}
              </p>
            </div>

            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Attempted to Resolve</h4>
              </div>
              <p className="value">{formData?.complaintDetails?.resolve}</p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">
                  Complainant Action Description
                </h4>
              </div>
              <p className="value">
                {formData?.complaintDetails?.actionDescription}
              </p>
            </div>
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">
                  Complaint previously submitted?
                </h4>
              </div>
              <p className="value">
                {formData?.complaintDetails?.complaintSubmitted}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="form-container">
        <h2>Complainant Details</h2>
        <div className="form-body">
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Organization Name</h4>
              </div>
              <p className="value">
                {formData?.complainantDetails?.organizationName}
              </p>
            </div>

            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Organization Type</h4>
              </div>
              <p className="value">
                {formData?.complainantDetails?.organizationType}
              </p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Organization Type (Other)</h4>
              </div>
              <p className="value">
                {formData?.complainantDetails?.organizationTypeOther}
              </p>
            </div>
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Organization Role</h4>
              </div>
              <p className="value">
                {formData?.complainantDetails?.organizationRole}
              </p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Organization Phone Number</h4>
              </div>
              <p className="value">
                {formData?.complainantDetails?.organizationPhone}
              </p>
            </div>

            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Title</h4>
              </div>
              <p className="value">{formData?.complainantDetails?.title}</p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">First Name</h4>
              </div>
              <p className="value">{formData?.complainantDetails?.firstName}</p>
            </div>
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">MI</h4>
              </div>
              <p className="value">
                {formData?.complainantDetails?.middleInitial}
              </p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Last Name</h4>
              </div>
              <p className="value">{formData?.complainantDetails?.lastName}</p>
            </div>
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Address Line 1</h4>
              </div>
              <p className="value">
                {formData?.complainantDetails?.addressLine1}
              </p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Address Line 2</h4>
              </div>
              <p className="value">
                {formData?.complainantDetails?.addressLine2}
              </p>
            </div>
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">City/Town</h4>
              </div>
              <p className="value">{formData?.complainantDetails?.city}</p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">State/Territory</h4>
              </div>
              <p className="value">{formData?.complainantDetails?.state}</p>
            </div>
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Zip Code</h4>
              </div>
              <p className="value">{formData?.complainantDetails?.zipCode}</p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Email Address</h4>
              </div>
              <p className="value">{formData?.complainantDetails?.email}</p>
            </div>
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Contact Phone Number</h4>
              </div>
              <p className="value">
                {formData?.complainantDetails?.contactPhone}
              </p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Cell Phone Number</h4>
              </div>
              <p className="value">{formData?.complainantDetails?.cellPhone}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="form-container">
        <h2>FAE Details</h2>
        <div className="form-body">
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">FAE Organization Name</h4>
              </div>
              <p className="value">{formData?.faeDetails?.organizationName}</p>
            </div>

            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Organization Type</h4>
              </div>
              <p className="value">{formData?.faeDetails?.organizationType}</p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Organization Type (Other)</h4>
              </div>
              <p className="value"></p>
            </div>
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Organization Role</h4>
              </div>
              <p className="value">{formData?.faeDetails?.organizationRole}</p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Title</h4>
              </div>
              <p className="value">{formData?.faeDetails?.title}</p>
            </div>

            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">First Name</h4>
              </div>
              <p className="value">{formData?.faeDetails?.firstName}</p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">MI</h4>
              </div>
              <p className="value">{formData?.faeDetails?.middleInitial}</p>
            </div>
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Last Name</h4>
              </div>
              <p className="value">{formData?.faeDetails?.lastName}</p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Address Line 1</h4>
              </div>
              <p className="value">{formData?.faeDetails?.addressLine1}</p>
            </div>
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Address Line 2</h4>
              </div>
              <p className="value">{formData?.faeDetails?.addressLine2}</p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">City/Town</h4>
              </div>
              <p className="value">{formData?.faeDetails?.city}</p>
            </div>
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">State/Territory</h4>
              </div>
              <p className="value">{formData?.faeDetails?.state}</p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Zip Code</h4>
              </div>
              <p className="value">{formData?.faeDetails?.zipCode}</p>
            </div>
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Contact Email Address</h4>
              </div>
              <p className="value">{formData?.faeDetails?.email}</p>
            </div>
          </div>
          <div className="flex-box">
            <div className="row">
              <div className="left-column">
                <h4 className="form-input-label">Phone Number</h4>
              </div>
              <p className="value">{formData?.faeDetails?.contactPhone}</p>
            </div>
          </div>
        </div>

        <div className="button-section">
          <Button
            variation="solid"
            onClick={() =>
              previousPageHandler(navigate, goToStep, "/complaint-details", 4)
            }
            className="welcome-button"
          >
            <ArrowIcon direction="left" />
            Complaint Details Information
          </Button>
          <Button
            variation="solid"
            onClick={() => cancelHandler(navigate, goToStep)}
          >
            Cancel
          </Button>
          <Button variation="solid" onClick={() => onSubmit()}>
            Submit <ArrowIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewComplaint;
