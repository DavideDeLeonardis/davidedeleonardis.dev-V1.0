// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Portal from '../';

// Assets
import { socials } from '../../../constants/mySocials';

// SCSS
import classes from './index.module.scss';

const SocialsPortal = () => {
   const socialList = socials.map(
      ({ myLink, socialName, fontAwesomePrefix }, index) => (
         <div key={index} className={classes['container-item']}>
            <a href={myLink} target="_blank" rel="noreferrer">
               <div
                  className={`${classes['social-item']} 
				${classes[socialName]}`}
               >
                  <FontAwesomeIcon
                     icon={`fa-${fontAwesomePrefix} fa-${socialName}`}
                     className={classes.socialIcon}
                  />
               </div>
            </a>
         </div>
      )
   );

   return (
      <Portal>
         <div className={classes['aside-container']}>{socialList}</div>
      </Portal>
   );
};

export default SocialsPortal;
