import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { socials } from "../../assets/config/mySocials";
import classes from "../../assets/scss/partials/_aside.module.scss";

const SocialsPortal = () => {
   const socialList = socials.map((social, index) => (
      <div className={classes["social-item"]} key={index}>
         <a href={social.myLink} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
               icon={`fa-brands fa-${social.socialName}`}
               className={classes.social}
            />
         </a>
      </div>
   ));

   return <div className={classes["aside-container"]}>{socialList}</div>;
};

export default SocialsPortal;
