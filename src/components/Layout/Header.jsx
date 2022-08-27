import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from './Nav';
import Resume from '../Portals/ResumePortal';
import Backdrop from '../UI/BackdropPortal';
import Button from '../UI/Button';
import useDimensions from '../../hooks/useDimensions';

import '../../assets/scss/partials/_header.scss';

const Header = () => {
   const [menuIsShown, setMenuIsShown] = useState(false);
   const [togglerIsShown, setTogglerIsShown] = useState(true);
   const [slideToLeft, setSlideToLeft] = useState(false);
   const [resumeIsShown, setResumeisShown] = useState(false);
   const [scaleDown, setScaleDown] = useState(false);
   const { width: screenWidth } = useDimensions();

   const showMenuHandler = () => {
      setMenuIsShown(true);
      setSlideToLeft(true);
      setTogglerIsShown(false);
   };

   const hideMenuHandler = () => {
      setSlideToLeft(false);
      // time to slide nav to complete + 50ms
      setTimeout(() => {
         setMenuIsShown(false);
      }, 350);
      setTogglerIsShown(true);
   };

   const showResumeHandler = () => {
      setResumeisShown(true);
      setMenuIsShown(false);
      setTogglerIsShown(true);
      setScaleDown(false);
   };

   const hideResumeHandler = () => {
      setScaleDown(true);
      // time for scale down animation to complete
      setTimeout(() => {
         setResumeisShown(false);
      }, 150);
   };

   // Actual nav elements
   const navElements = (
      <Fragment>
         <Nav onClose={hideMenuHandler} />
         <Button className="resume-button" onClick={showResumeHandler}>
            Resume
         </Button>
      </Fragment>
   );

   // Nav vertical portal
   const menuPortal = ReactDOM.createPortal(
      <div
         className={`${'header-portal'} ${
            slideToLeft ? 'slide-to-left' : 'slide-to-right'
         }`}
      >
         {navElements}
      </div>,
      document.getElementById('overlays')
   );

   return (
      <header>
         {/* backdrop menu vertical */}
         {menuIsShown && screenWidth < 769 && (
            <Backdrop onClose={hideMenuHandler} isBlack={false} />
         )}

         {/* resume portal */}
         {resumeIsShown && (
            <Resume
               backdropIsShown={resumeIsShown}
               onClose={hideResumeHandler}
               scaleDown={scaleDown}
            />
         )}

         <div className="container-sm header">
            <div className="logo-header">Davide</div>

            {/* toggler */}
            {togglerIsShown && screenWidth < 769 && (
               <button className="toggler" onClick={showMenuHandler}>
                  <FontAwesomeIcon icon="fa-solid fa-bars" />
               </button>
            )}

            {/* nav horizontal */}
            {screenWidth > 768 && (
               <div className="header-right">{navElements}</div>
            )}

            {/* nav vertical */}
            {menuIsShown && screenWidth < 769 && menuPortal}
         </div>
      </header>
   );
};

export default Header;
