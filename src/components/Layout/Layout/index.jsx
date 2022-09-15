import ReactDOM from 'react-dom';

import Header from '../Header';
import Footer from '../Footer';
import SocialsPortal from '../../portals/SocialsPortal';
import ArrowUpPortal from '../../portals/ArrowUpPortal';
import { Outlet } from 'react-router-dom';

const Layout = () => {
   const overlay = document.getElementById('overlays');

   const socials = ReactDOM.createPortal(<SocialsPortal />, overlay);
   const arrowUp = ReactDOM.createPortal(<ArrowUpPortal />, overlay);

   return (
      <>
         <Header />
         <main id="page-top" className="container">
            <Outlet />
         </main>
         <Footer />

         {socials}
         {arrowUp}
      </>
   );
};

export default Layout;
