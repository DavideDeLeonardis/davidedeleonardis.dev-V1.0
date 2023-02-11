// UI
import Portal from '../../portals';
import Backdrop from '../Backdrop';

// SCSS
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
