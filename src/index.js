import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
   faAngleUp,
   faSpinner,
   faBars,
   faEnvelope,
   faXmark,
   faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
   faLinkedin,
   faInstagram,
   faTwitter,
   faGithub,
} from '@fortawesome/free-brands-svg-icons';

import App from './components/App';

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
   faArrowUpRightFromSquare
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <StrictMode>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </StrictMode>
);
