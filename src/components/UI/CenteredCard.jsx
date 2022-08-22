import { Fragment } from 'react';

import Backdrop from './BackdropPortal';

import classes from '../../assets/scss/partials/_card-portal.module.scss';

const CardPortal = ({ children, backdropIsShown, onClose }) => {
   return (
      <Fragment>
         {backdropIsShown && <Backdrop onClose={onClose} isBlack />}
         <div className={classes['card-portal']}>{children}</div>
      </Fragment>
   );
};

export default CardPortal;
