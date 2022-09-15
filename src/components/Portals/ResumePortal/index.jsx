import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardPortal from '../../ui/CardPortal';

import classes from './index.module.scss';

const Resume = ({ backdropIsShown, onClose, scaleDown }) => {
   const { t } = useTranslation();

   return (
      <CardPortal
         backdropIsShown={backdropIsShown}
         onClose={onClose}
         scaleDown={scaleDown}
      >
         <div className={classes['resume-container']}>
            <a href={t('header.resume')} target="_blank" rel="noreferrer">
               See my Resume
               <FontAwesomeIcon
                  className={classes.icon}
                  icon="fa-solid fa-arrow-up-right-from-square"
               />
            </a>
            <span>or</span>
            <div>
               <img
                  width="200"
                  src={t('header.qr_code')}
                  alt="qrcode of curriculum vitae"
               />
               <span className={classes['scan-text']}>Scan Me!</span>
            </div>
         </div>
      </CardPortal>
   );
};

export default Resume;
