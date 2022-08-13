import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from './Nav';

import classes from '../../assets/scss/partials/_header.module.scss';

const Header = () => {
   const [menuIsShown, setMenuIsShown] = useState(false);
   const [togglerIsShown, setTogglerIsShown] = useState(true);
   const [slideToLeft, setSlideToLeft] = useState(false);

   const showMenuHandler = () => {
      setMenuIsShown(true);
      setSlideToLeft(true);
      setTogglerIsShown(false);
   };

   const hideMenuHandler = () => {
      setSlideToLeft(false);
		// give to animation time necessary to complete
      setTimeout(() => {
         setMenuIsShown(false);
      }, 350);
      setTogglerIsShown(true);
   };

   // actual nav elements
   const navElements = (
      <Fragment>
         <Nav onClose={hideMenuHandler} />
         <button>Light/Dark mode</button>
			<br />
			<button>RESUME</button>
      </Fragment>
   );

   // nav vertical portal
   const menuPortal = ReactDOM.createPortal(
      menuIsShown && (
         <div
            className={`${classes['header-portal']} ${
               slideToLeft
                  ? classes['slide-to-left']
                  : classes['slide-to-right']
            }`}
         >
            {navElements}
         </div>
      ),
      document.getElementById('overlays')
   );

   return (
      <header>
         <div className={`container ${classes.header}`}>
            <div className={classes.logo}>Davide De Leonardis</div>

            {/* toggler */}
            {togglerIsShown && (
               <button className={classes.toggler} onClick={showMenuHandler}>
                  <FontAwesomeIcon icon="fa-solid fa-bars" />
               </button>
            )}

            {/* nav horizontal (d-none con vw < 768px) */}
            <div className={classes['header-right-horizontal']}>
               {navElements}
            </div>

            {menuPortal}
         </div>
      </header>
   );
};

export default Header;
