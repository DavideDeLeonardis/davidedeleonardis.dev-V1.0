import ReactDOM from 'react-dom';

import Backdrop from '../Backdrop';

import classes from './index.module.scss';

const CardPortal = ({ children, backdropIsShown, onClose, scaleDown }) => {
   return ReactDOM.createPortal(
      <>
         {backdropIsShown && <Backdrop onClose={onClose} isBlack />}
         <div
            className={`
					${classes['card-portal']}
					${scaleDown && classes['scale-down']}`}
         >
            {children}
         </div>
      </>,
      document.getElementById('overlays')
   );
};

export default CardPortal;
