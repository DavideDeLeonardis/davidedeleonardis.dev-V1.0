import { Fragment } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "./Header";
import Footer from "./Footer";
import SocialsPortal from "../Elements/SocialsPortal";

import "../../assets/scss/partials/_arrow_up.scss";

const Layout = (props) => {
   const overlay = document.getElementById("overlays");

   const arrowUp = ReactDOM.createPortal(
      <a href="#page-top" className="arrow-up-scroll">
         <FontAwesomeIcon icon="angle-up" />
      </a>,
      overlay
   );

   const socials = ReactDOM.createPortal(<SocialsPortal />, overlay);

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
