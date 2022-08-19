import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from '../../assets/scss/partials/_mail-message.module.scss';

const Message = ({ message, onHideMessage }) => {
   return (
      <div
         className={`
					${classes.message} 
					${message && classes['slide-to-right']}
				`}
      >
         {message}
         <div className={classes.x} onClick={onHideMessage}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
         </div>
      </div>
   );
};

export default Message;
