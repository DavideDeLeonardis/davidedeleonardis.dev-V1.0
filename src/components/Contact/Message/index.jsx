import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Portal from '../../portals';

import classes from './index.module.scss';

const Message = ({ message, isValid, onHideMessage }) => {
   const bgColor = { valid: '#2ea82e', invalid: '#d00909' };

   return (
      <Portal>
         <div
            className={`
					${classes.message} 
					${message && classes['slide-to-right']}
				`}
            style={{
               backgroundColor: `${isValid ? bgColor.valid : bgColor.invalid}`,
            }}
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
