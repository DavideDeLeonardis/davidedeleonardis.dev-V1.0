import CV from '../../assets/images/cv_IT.png';
import QRcode from '../About/QRcode';

import classes from '../../assets/scss/partials/_resume-portal.module.scss';

const Resume = (props) => {
   return (
      <div className={classes['resume-container']}>
         <button onClick={props.onClose}>X</button>
         <h2>RESUME</h2>
         <a href={CV} download>
            Download my RESUME
         </a>
         <br />
         or <br />
         <span>scan it</span>
         <QRcode />
      </div>
   );
};

export default Resume;