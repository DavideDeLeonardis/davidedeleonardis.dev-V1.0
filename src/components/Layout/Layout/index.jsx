import ReactDOM from 'react-dom';

import Header from '../Header';
import Footer from '../Footer';
import SocialsPortal from '../../portals/SocialsPortal';

const Layout = ({ children, isHome }) => {
   const socials = ReactDOM.createPortal(
      <SocialsPortal />,
      document.getElementById('overlays')
   );

   return (
      <>
         <Header isHome={isHome} />
         <main className="container">{children}</main>
         <Footer />

         {socials}
      </>
   );
};

export default Layout;
