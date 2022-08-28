import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './_mail-message.module.scss';

const Message = ({ message, isValid, onHideMessage }) => {
   return (
      <div
         className={`
					${classes.message} 
					${message && classes['slide-to-right']}
				`}
         style={
            isValid
               ? { backgroundColor: '#2ea82e' }
               : { backgroundColor: '#d00909' }
         }
      >
         {message}
         <div className={classes.x} onClick={onHideMessage}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
         </div>
      </div>
   );
};

export default Message;
