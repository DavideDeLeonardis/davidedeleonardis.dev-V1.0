import { Link } from "react-router-dom";

import classes from "../../assets/scss/partials/_nav.module.scss";

const Nav = () => {
   return (
      <nav>
         <ul className={classes["list-elements"]}>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/projects">Projects</Link>
            </li>
            <li>
               <Link to="/contact">Contact Me</Link>
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
