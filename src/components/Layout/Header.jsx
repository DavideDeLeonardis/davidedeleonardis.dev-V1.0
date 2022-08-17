import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from './Nav';
import Resume from '../Portals/ResumePortal';
import Backdrop from '../UI/BackdropPortal';

import classes from '../../assets/scss/partials/_header.module.scss';

const Header = () => {
   const [menuIsShown, setMenuIsShown] = useState(false);
   const [togglerIsShown, setTogglerIsShown] = useState(true);
   const [slideToLeft, setSlideToLeft] = useState(false);
   const [resumeIsShown, setResumeisShown] = useState(false);

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

   const showResumeHandler = () => {
      setResumeisShown(true);
      setMenuIsShown(false);
      setTogglerIsShown(true);
   };

   const hideResumeHandler = () => {
      setResumeisShown(false);
   };

   // actual nav elements
   const navElements = (
      <Fragment>
         <Nav onClose={hideMenuHandler} />
         <button onClick={showResumeHandler}>Resume</button>
      </Fragment>
   );

   // HTML portal element
   const overlays = document.getElementById('overlays');

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
      overlays
   );

   return (
      <header>
         {/* backdrop black */}
         {resumeIsShown && <Backdrop onClose={hideResumeHandler} />}

         {/* resume portal */}
         {ReactDOM.createPortal(
            resumeIsShown && <Resume />,
            overlays
         )}

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
