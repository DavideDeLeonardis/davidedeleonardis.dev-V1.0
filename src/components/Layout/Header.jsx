import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from "./Nav";

import classes from "../../assets/scss/partials/_header.module.scss";

const Header = () => {
   return (
      <header>
         <div className={`container ${classes.header}`}>
            <div className={classes.logo}>Davide De Leonardis</div>
            <FontAwesomeIcon icon="fa-solid fa-bars" />
            <div className={`${classes["header-right-horizontal"]}`}>
               <Nav />
               <button>L/D mode</button>
            </div>
         </div>
      </header>
   );
};

export default Header;
