import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from "./Nav";

import classes from "../../assets/scss/partials/_header.module.scss";

const Header = () => {
   const [menuIsShown, setMenuIsShown] = useState(false);
   const [togglerIsShown, setTogglerIsShown] = useState(true);

   const showMenuHandler = () => {
      setMenuIsShown(true);
      setTogglerIsShown(false);
   };

   const hideMenuHandler = () => {
      setMenuIsShown(false);
      setTogglerIsShown(true);
   };

   const navAndSwitch = (
      <Fragment>
         <Nav onClose={hideMenuHandler} />
         <button>L/D mode</button>
      </Fragment>
   );

   const menuPortal = ReactDOM.createPortal(
      menuIsShown && (
         <div className={classes["header-portal"]}>{navAndSwitch}</div>
      ),
      document.getElementById("overlays")
   );

   return (
      <header>
         <div className={`container ${classes.header}`}>
            <div className={classes.logo}>Davide De Leonardis</div>

            {togglerIsShown && (
               <button className={classes.toggler} onClick={showMenuHandler}>
                  <FontAwesomeIcon icon="fa-solid fa-bars" />
               </button>
            )}

            <div className={classes["header-right-horizontal"]}>
               {navAndSwitch}
            </div>

            {menuPortal}
         </div>
      </header>
   );
};

export default Header;
