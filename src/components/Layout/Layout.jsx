import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './Header';
import Footer from './Footer';
import SocialsPortal from '../Portals/SocialsPortal';
import ArrowUp from '../Portals/ArrowUp';

const Layout = (props) => {
   const overlay = document.getElementById('overlays');

   const socials = ReactDOM.createPortal(<SocialsPortal />, overlay);
   const arrowUp = ReactDOM.createPortal(<ArrowUp />, overlay);

   return (
      <Fragment>
         <Header />
         <main id="page-top" className="container">
            {props.children}
         </main>
         <Footer />
			
         {socials}
         {arrowUp}
      </Fragment>
   );
};

export default Layout;
