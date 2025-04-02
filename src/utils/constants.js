export const indianStatesAndUTs = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

export const organizationType = [
  "Health Care Clearinghouse",
  "Covered Health Care Provider",
  "Health Plan",
  "Vendor",
  "Other",
];

export const title = ["Mr.", "Mrs.", "Miss", "Ms.", "Vendor", "Dr."];

export const complaintTypes = [
  {
    value: "Transactions",
    label: "Transactions",
    description:
      "Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of benefits and premium payment.",
  },
  {
    value: "Code Sets",
    label: "Code Sets",
    description:
      "Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes.",
  },
  {
    value: "Unique Identifiers",
    label: "Unique Identifiers",
    description:
      "Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).",
  },
  {
    value: "Operating Rules",
    label: "Operating Rules",
    description:
      "Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.",
  },
];

export const footerLinks = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Privacy Policy",
    link: "/",
  },
  {
    text: "Security Policy",
    link: "/",
  },
];

export const items = [
  {
    text: "Register",
    link: "/",
  },
  {
    text: "Login",
    link: "/",
  },
];

export const steps = [
  "Complaint Type",
  "Complainant Details",
  "FAE Details",
  "Complaint Details",
  "Review Complaint",
  "Submitted",
];

export const codeSet = [
  "International Class Of Diseases, 9th Ed (ICD-9-CM)",
  "Common Procedure Terminology (CPT)",
  "Codes - Current Dental Terminology (CDT)",
  "Healthcare Common Procedure Coding Systems (HCPCS)",
  "National Drug Code (NDC)",
  "International Class of Diseases,10th Ed(ICD-10-CM)",
  "Other",
];

export const instructions = [
  {
    text: "Identify the type of HIPAA/ACA complaint",
  },
  {
    text: "Provide your contact information",
  },
  {
    text: "Identify the Filed Against Entity",
  },
  {
    text: "Describe the HIPAA/ACA violation",
  },
  {
    text: "Review and Submit",
  },
];

export const cancelHandler = (navigate, goToStep) => {
  navigate("/");
  goToStep(1);
};

export const previousPageHandler = (navigate, goToStep, route, step) => {
  navigate(route);
  goToStep(step);
};
