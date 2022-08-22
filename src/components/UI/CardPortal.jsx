import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './BackdropPortal';

import classes from '../../assets/scss/partials/_card-portal.module.scss';

const CardPortal = ({ children, backdropIsShown, onClose }) => {
   return ReactDOM.createPortal(
      <Fragment>
         {backdropIsShown && <Backdrop onClose={onClose} isBlack />}
         <div className={classes['card-portal']}>{children}</div>
      </Fragment>,
      document.getElementById('overlays')
   );
};

export default CardPortal;
