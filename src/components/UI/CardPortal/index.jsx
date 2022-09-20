import Portal from '../Portal';
import Backdrop from '../Backdrop';

import classes from './index.module.scss';

const CardPortal = ({ children, backdropIsShown, onClose, scaleDown }) => {
   return (
      <Portal>
         {backdropIsShown && <Backdrop onClose={onClose} isBlack />}
         <div
            className={`
					${classes['card-portal']}
					${scaleDown && classes['scale-down']}`}
         >
            {children}
         </div>
      </Portal>
   );
};

export default CardPortal;
