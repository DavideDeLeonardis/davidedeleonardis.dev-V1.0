import ReactDOM from 'react-dom';

import Header from '../Header';
import Footer from '../Footer';
import SocialsPortal from '../../portals/SocialsPortal';
import ArrowUpPortal from '../../portals/ArrowUpPortal';

const Layout = ({ children, isHome }) => {
   const overlay = document.getElementById('overlays');

   const socials = ReactDOM.createPortal(<SocialsPortal />, overlay);
   const arrowUp = ReactDOM.createPortal(<ArrowUpPortal />, overlay);

   return (
      <>
         <Header isHome={isHome} />
         <main className="container">{children}</main>
         <Footer />

         {socials}
         {arrowUp}
      </>
   );
};

export default Layout;
