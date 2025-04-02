import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "@cmsgov/design-system/dist/css/index.css";
import "@cmsgov/design-system/dist/css/core-theme.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
   </StrictMode>
);
