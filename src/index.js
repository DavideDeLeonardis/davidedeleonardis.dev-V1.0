import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
   faAngleUp,
   faSpinner,
   faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
   faLinkedin,
   faInstagram,
   faTwitter,
   faGithub,
} from "@fortawesome/free-brands-svg-icons";

import App from "./App";
// import MaintenancePage from "./pages/MaintenancePage";

import "./assets/scss/index.scss";

library.add(
   faAngleUp,
   faSpinner,
   faBars,
   faLinkedin,
   faInstagram,
   faTwitter,
   faGithub
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </StrictMode>
   // <MaintenancePage />
);
