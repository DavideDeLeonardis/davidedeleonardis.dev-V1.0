// Libraries
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// UI
import CardPortal from '../../ui/CardPortal';

// SCSS
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
               {t('header.resume_p_rext')}
               <FontAwesomeIcon
                  className={classes.icon}
                  icon="fa-solid fa-arrow-up-right-from-square"
               />
            </a>
            <span>{t('header.resume_o')}</span>
            <div className={classes.qr}>
               <img
                  width="200"
                  src={t('header.qr_code')}
                  alt="qrcode of curriculum vitae"
               />
               <span>{t('header.resume_p_scan')}</span>
            </div>
         </div>
      </CardPortal>
   );
};

export default Resume;
