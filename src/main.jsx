import "./storage.js";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TurneyTactics from "./TurneyTactics.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TurneyTactics />
  </StrictMode>
);
