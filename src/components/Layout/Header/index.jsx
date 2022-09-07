import { useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from './Nav';
import Resume from '../../portals/ResumePortal';
import Backdrop from '../../ui/Backdrop';
import Button from '../../ui/Button';
import useDimensions from '../../../hooks/useDimensions';

import './index.scss';

const Header = () => {
   const [menuIsShown, setMenuIsShown] = useState(false);
   const [togglerIsShown, setTogglerIsShown] = useState(true);
   const [resumeIsShown, setResumeisShown] = useState(false);
   const [scaleDown, setScaleDown] = useState(false);
   const { screenWidth } = useDimensions();

   const showMenuHandler = () => {
      setMenuIsShown(true);
      setTogglerIsShown(false);
   };

   const hideMenuHandler = () => {
      setMenuIsShown(false);
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
      <>
         <Nav onClose={hideMenuHandler} />
         <Button className="resume-button" onClick={showResumeHandler}>
            Resume
         </Button>
      </>
   );

   // Nav vertical portal
   const menuPortal = ReactDOM.createPortal(
      <div className="header-portal">{navElements}</div>,
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
            <div className="logo-header">
               <a href="/">Davide</a>
            </div>

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
