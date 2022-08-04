import { Fragment } from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
   return (
      <Fragment>
         <Header />
         <main>{props.children}</main>
         <Footer />
      </Fragment>
   );
};

export default Layout;
