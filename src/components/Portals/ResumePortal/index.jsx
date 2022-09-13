import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CardPortal from '../../ui/CardPortal';
import resume from '../../../assets/images/resume/resume-EN.pdf';
import qrcode from '../../../assets/images/resume/qrcode-EN.png';

import classes from './index.module.scss';

const Resume = ({ backdropIsShown, onClose, scaleDown }) => {
   return (
      <CardPortal
         backdropIsShown={backdropIsShown}
         onClose={onClose}
         scaleDown={scaleDown}
      >
         <div className={classes['resume-container']}>
            <a href={resume} target="_blank" rel="noreferrer">
               See my Resume
               <FontAwesomeIcon
                  className={classes.icon}
                  icon="fa-solid fa-arrow-up-right-from-square"
               />
            </a>
            <span>or</span>
            <div>
               <img width="200" src={qrcode} alt="qrcode of curriculum vitae" />
               <span className={classes['scan-text']}>Scan Me!</span>
            </div>
         </div>
      </CardPortal>
   );
};

export default Resume;
