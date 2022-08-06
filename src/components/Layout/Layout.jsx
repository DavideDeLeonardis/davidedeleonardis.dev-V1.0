import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Footer from "./Footer";
import Header from "./Header";

import "../../assets/scss/partials/_arrow_up.scss";

const Layout = (props) => {
   return (
      <Fragment>
         <Header />
         <main>{props.children}</main>
         <Footer />

         <a href="#header" className="arrow-up-scroll">
            <FontAwesomeIcon icon="angle-up" />
         </a>
      </Fragment>
   );
};

export default Layout;
