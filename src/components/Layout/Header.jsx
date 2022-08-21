import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from './Nav';
import Resume from '../Portals/ResumePortal';
import Backdrop from '../UI/BackdropPortal';
import useDimensions from '../../hooks/useDimensions';

import '../../assets/scss/partials/_header.scss';

const Header = () => {
   const [menuIsShown, setMenuIsShown] = useState(false);
   const [togglerIsShown, setTogglerIsShown] = useState(true);
   const [slideToLeft, setSlideToLeft] = useState(false);
   const [resumeIsShown, setResumeisShown] = useState(false);
   const { width: screenWidth } = useDimensions();

   const showMenuHandler = () => {
      setMenuIsShown(true);
      setSlideToLeft(true);
      setTogglerIsShown(false);
   };

   const hideMenuHandler = () => {
      setSlideToLeft(false);
      // give to animation the time necessary to complete + 50ms
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

   const hideResumeHandler = () => setResumeisShown(false);

   // Actual nav elements
   const navElements = (
      <Fragment>
         <Nav onClose={hideMenuHandler} />
         <button className="resume-button" onClick={showResumeHandler}>
            Resume
         </button>
      </Fragment>
   );

   // HTML portal element
   const overlays = document.getElementById('overlays');

   // Nav vertical portal
   const menuPortal = ReactDOM.createPortal(
      <div
         className={`${'header-portal'} ${
            slideToLeft ? 'slide-to-left' : 'slide-to-right'
         }`}
      >
         {navElements}
      </div>,
      overlays
   );

   return (
      <header>
         {/* backdrop resume */}
         {resumeIsShown && (
            <Backdrop onClose={hideResumeHandler} isBlack />
         )}

         {/* backdrop menu vertical */}
         {menuIsShown && screenWidth < 769 && (
            <Backdrop onClose={hideMenuHandler} isBlack={false} />
         )}

         {/* resume portal */}
         {ReactDOM.createPortal(resumeIsShown && <Resume />, overlays)}

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
