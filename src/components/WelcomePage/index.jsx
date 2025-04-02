import { Button, ArrowIcon } from "@cmsgov/design-system";
import { cancelHandler, instructions } from "../../utils/constants";
import "./WelcomePage.scss";
import { useStep } from "../../context/StepContext";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const { goToStep } = useStep();
  const navigate = useNavigate(); // Initialize navigate

  const nextPageHandler = () => {
    navigate("/complaint-type");
    goToStep(1);
  };

  return (
    <div className="welcome-container">
      <h1 className="heading">
        Administrative Simplification Enforcement and Testing Tool (ASETT)
      </h1>
      <hr className="divider" />
      <div className="main-section">
        <p className="disclaimer">
          Disclaimer: If you file a complaint without registration, you will not
          be able to view your complaints,upload supporting documents,
          correspond electronically, or test transactions.
        </p>
        <p>
          The following is the list of steps you will take in order to file a
          complaint regarding HIPAA Transactions and Code Sets, Unique
          Identifiers, and/or Operating Rules. If you wish to file a Health
          Insurance Privacy complaint, please visit the{" "}
          <a href="https://www.hhs.gov/hipaa/filing-a-complaint/what-to-expect/index.html" target="_blank">
            Office for Civil Rights (OCR)
          </a>{" "}
          website.
        </p>
        {instructions?.map((instruction, index) => (
          <p key={index}>
            Step {index + 1} : {instruction?.text}
          </p>
        ))}
        <p>
          You can review all information entered before submitting your
          complaint to CMS. Once the complaint is submitted, CMS will review all
          information and respond to your complaint.
        </p>
        <p>
          Click the Complaint Type button below to begin filing your complaint.
        </p>
        <div className="button-section">
          <Button variation="solid" onClick={() => cancelHandler(navigate, goToStep)}>
            Cancel
          </Button>
          <Button variation="solid" onClick={() => nextPageHandler()}>
            Complaint Type <ArrowIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
