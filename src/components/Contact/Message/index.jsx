import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Portal from '../../ui/Portal';

import classes from './index.module.scss';

const Message = ({ message, isValid, onHideMessage }) => {
   return (
      <Portal>
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
               <FontAwesomeIcon
                  icon="fa-solid fa-xmark"
                  className={classes.icon}
               />
            </div>
         </div>
      </Portal>
   );
};

export default Message;
