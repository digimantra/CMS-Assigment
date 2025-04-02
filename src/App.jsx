import { FormProvider } from "./context/FormContext"; // Import FormProvider
import { StepProvider } from "./context/StepContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import ComplaintType from "./components/ComplaintType";
import ComplainantDetails from "./components/ComplainantDetails";
import FAEDetails from "./components/FAEDetails";
import ComplaintDetails from "./components/ComplaintDetails";
import ReviewComplaint from "./components/ReviewComplaint";
import Submit from "./components/Submit";
import WelcomePage from "./components/WelcomePage";
import StepBar from "./components/StepBar";
import "../src/styles/main.scss";

function App() {
  return (
    <StepProvider>
      <FormProvider>
        <Router>
          <div className="container">
            <NavigationBar />
            <MainContent />
            {/* <Footer /> */}
          </div>
        </Router>
      </FormProvider>
    </StepProvider>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <StepBar />}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/complaint-type" element={<ComplaintType />} />
        <Route path="/complainant-details" element={<ComplainantDetails />} />
        <Route path="/fae-details" element={<FAEDetails />} />
        <Route path="/complaint-details" element={<ComplaintDetails />} />
        <Route path="/review-complaint" element={<ReviewComplaint />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
