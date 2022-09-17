import ReactDOM from 'react-dom';

import Header from '../Header';
import Footer from '../Footer';
import SocialsPortal from '../../portals/SocialsPortal';
import { Outlet } from 'react-router-dom';

const Layout = () => {
   const socials = ReactDOM.createPortal(
      <SocialsPortal />,
      document.getElementById('overlays')
   );

   return (
      <>
         <Header />
         <main id="page-top" className="container">
            <Outlet />
         </main>
         <Footer />

         {socials}
      </>
   );
};

export default Layout;
