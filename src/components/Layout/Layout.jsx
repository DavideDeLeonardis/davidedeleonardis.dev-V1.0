import { Fragment } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "./Header";
import SocialsPortal from "./SocialsPortal";
import Footer from "./Footer";

import "../../assets/scss/partials/_arrow_up.scss";

const Layout = (props) => {
   const arrowUp = ReactDOM.createPortal(
      <a href="#page-top" className="arrow-up-scroll">
         <FontAwesomeIcon icon="angle-up" />
      </a>,
      document.getElementById("overlays")
   );

   const socials = ReactDOM.createPortal(
      <SocialsPortal />,
      document.getElementById("overlays")
   );

   return (
      <Fragment>
         <Header />
         <main id="page-top">{props.children}</main>
         <Footer />
         {socials}
         {arrowUp}
      </Fragment>
   );
};

export default Layout;
