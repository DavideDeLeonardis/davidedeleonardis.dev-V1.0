import { Link } from "react-router-dom";

import { links } from "../../assets/config/navLinks";

import classes from "../../assets/scss/partials/_header.module.scss";

const Nav = (props) => {
   const linksList = links.map((link, key) => (
      <li key={key} onClick={props.onClose}>
         <Link to={link.to}>{link.linkName}</Link>
      </li>
   ));

   return (
      <nav>
         <button className={classes["button-close"]} onClick={props.onClose}>
            X
         </button>
         <ul className={classes["list-elements"]}>{linksList}</ul>
      </nav>
   );
};

export default Nav;
