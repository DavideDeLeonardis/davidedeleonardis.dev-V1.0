import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { socials } from '../../../assets/config/mySocials';

import classes from './index.module.scss';

const SocialsPortal = () => {
   const socialList = socials.map((social, index) => (
      <div key={index} className={classes['container-item']}>
         <a href={social.myLink} target="_blank" rel="noreferrer">
            <div
               className={`${classes['social-item']} 
				${classes[social.socialName]}`}
            >
               <FontAwesomeIcon
                  icon={`fa-${social.fontAwesomePrefix} fa-${social.socialName}`}
                  className={classes.socialIcon}
               />
            </div>
         </a>
      </div>
   ));

   return <div className={classes['aside-container']}>{socialList}</div>;
};

export default SocialsPortal;