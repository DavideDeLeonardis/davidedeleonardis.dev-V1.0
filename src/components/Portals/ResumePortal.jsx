import CardPortal from '../UI/CardPortal';
import CV from '../../assets/images/resume.pdf';
import qrcode from '../../assets/images/qrcode.png';

import classes from '../../assets/scss/partials/_resume-portal.module.scss';

const Resume = ({ backdropIsShown, onClose, scaleDown }) => {
   return (
      <CardPortal
         backdropIsShown={backdropIsShown}
         onClose={onClose}
         scaleDown={scaleDown}
      >
         <div className={classes['resume-container']}>
            <a href={CV} target="_blank" rel="noreferrer">
               See my Resume
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
