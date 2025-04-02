import { createContext, useState, useContext, useEffect } from "react";

const StepContext = createContext();

export const useStep = () => useContext(StepContext);

export const StepProvider = ({ children }) => {
  const initialStep = parseInt(localStorage.getItem("currentStep")) || 1;
  const [currentStep, setCurrentStep] = useState(initialStep);

  useEffect(() => {
    localStorage.setItem("currentStep", currentStep);
  }, [currentStep]);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const goToStep = (step) => setCurrentStep(step); // Allow direct step navigation

  return (
    <StepContext.Provider value={{ currentStep, nextStep, prevStep, goToStep }}>
      {children}
    </StepContext.Provider>
  );
};

export default StepContext;
