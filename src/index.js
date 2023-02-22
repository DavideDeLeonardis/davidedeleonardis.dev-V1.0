// Libraries
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './i18n';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
   faAngleUp,
   faSpinner,
   faBars,
   faEnvelope,
   faXmark,
   faArrowUpRightFromSquare,
   faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import {
   faLinkedin,
   faInstagram,
   faTwitter,
   faGithub,
} from '@fortawesome/free-brands-svg-icons';

// App
import App from './App';

library.add(
   faAngleUp,
   faSpinner,
   faBars,
   faLinkedin,
   faInstagram,
   faTwitter,
   faGithub,
   faEnvelope,
   faXmark,
   faArrowUpRightFromSquare,
   faArrowDown
);

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </StrictMode>
);
