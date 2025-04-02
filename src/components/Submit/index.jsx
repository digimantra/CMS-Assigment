import { ArrowIcon, Button } from "@cmsgov/design-system";
import { cancelHandler } from "../../utils/constants";
import "./Submit.scss";
import { useNavigate } from "react-router-dom";
import { useStep } from "../../context/StepContext";

const Submit = () => {
  const { goToStep } = useStep();
  const navigate = useNavigate(); // Initialize navigate
  return (
    <div className="submit-container">
      <h1 className="heading">Complaint Successfully Submitted</h1>
      <hr className="divider" />
      <div className="main-section">
        <p>
          Thank you for using the automatic complaint system for compliance with
          the Health Insurance Portability and Accountability Act of 1996
          (HIPAA) and the Administrative Simplification Provisions of the
          Affordable Care Act of 2010 (ACA). Your complaint has been received by
          the Centers for Medicare and Medicaid Services (CMS) on behalf of the
          Department of Health and Human Services (HHS). The Enforcement Staff
          will review the allegations.
        </p>
        <p>
          Please allow 10 business days for a member of the Enforcement Team to
          contact you with the status of your complaint. If you have any
          additional information to provide with regard to this complaint you
          can attach supporting documents, test transaction, and notes on the
          Complaint Details Page by clicking on the Go To Complaint button
          below. If needed, you may also close/retract your complaint from the
          Complaints Details page.
        </p>
        <p>
          If further clarification or information is required, we will contact
          you by phone, email or letter. If your complaint pertains to the HIPAA
          Privacy Rule, it will be forwarded to the Office for Civil Rights for
          handling and processing, and it will be closed by our office. If your
          complaint is accepted by CMS, you may use the login identification
          information assigned to you during the registration process to check
          the status at any time. If you have questions regarding your
          complaint, you may send an email to{" "}
          <a href="/">hipaacomplaint@cms.hhs.gov</a>.
        </p>
        <h2>
          Complaint Reference Number: <span>25-UID-03224</span>
        </h2>
      </div>
      <div className="button-section">
        <Button
          variation="solid"
          onClick={() => cancelHandler(navigate, goToStep)}
          className="welcome-button"
        >
          <ArrowIcon direction="left" />
          Home Page
        </Button>
      </div>
    </div>
  );
};

export default Submit;
