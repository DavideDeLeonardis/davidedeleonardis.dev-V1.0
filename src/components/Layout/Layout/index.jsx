// Components
import Header from '../Header';
import Footer from '../Footer';
import SocialsPortal from '../../portals/SocialsPortal';

const Layout = ({ children, isHome }) => {
   return (
      <>
         <Header isHome={isHome} />
         <main className="container">{children}</main>
         <Footer />

         <SocialsPortal />
      </>
   );
};

export default Layout;
