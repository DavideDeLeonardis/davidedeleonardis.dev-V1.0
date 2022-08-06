import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

import App from "./App";

import "./assets/scss/index.scss";

library.add(faAngleUp);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </StrictMode>
);
