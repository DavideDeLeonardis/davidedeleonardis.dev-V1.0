import Nav from "./Nav";

import classes from "../../assets/scss/partials/_header.module.scss";

const Header = () => {
   return (
      <header>
         <h2 className={classes.name}>Davide De Leonardis</h2>
         <div className={classes["header-right"]}>
            <Nav />
            <span>Impostazioni</span>
         </div>
      </header>
   );
};

export default Header;
