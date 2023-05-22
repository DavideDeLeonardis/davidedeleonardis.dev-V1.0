// Libraries
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Trans, useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Nav from './Nav';
import Resume from '../../portals/ResumePortal';

// UI
import Backdrop from '../../ui/Backdrop';
import Button from '../../ui/Button';

// Custom hooks
import useDimensions from '../../../hooks/useDimensions';
import useWindowScroll from '../../../hooks/useWindowScroll';

// Assets
import logo from '../../../assets/images/exagon-logo-blue.png';

// SCSS
import './index.scss';

const Header = ({ isHome }) => {
   const [menuIsShown, setMenuIsShown] = useState(false);
   const [togglerIsShown, setTogglerIsShown] = useState(true);
   const [resumeIsShown, setResumeisShown] = useState(false);
   const [scaleDown, setScaleDown] = useState(false);
	const [isHover, setIsHover] = useState(false);
	
   const { scroll, isGoingDown, setIsGoingDown } = useWindowScroll(false);
   const { screenWidth } = useDimensions();
   const { t } = useTranslation();

   // Open menu function
   const openMenuHandler = () => {
      setMenuIsShown(true);
      setTogglerIsShown(false);
   };

   // Close menu function
   const closeMenuHandler = () => {
      setMenuIsShown(false);
      setTogglerIsShown(true);
   };

	// Show CV function
   const showResumeHandler = () => {
      setResumeisShown(true);
      setMenuIsShown(false);
      setTogglerIsShown(true);
      setScaleDown(false);
   };

	// Hide CV function
   const hideResumeHandler = () => {
      setScaleDown(true);
      // time for scale down animation to complete
      setTimeout(() => setResumeisShown(false), 150);
   };

   const isHoverHandler = () => setIsHover(true);

   const isNotHoverHandler = () => setIsHover(false);

   // In NOT home pages, hide header every 7 seconds
   useEffect(() => {
      !isHome && setTimeout(() => setIsGoingDown(true), 7000);
   }, [isHome, scroll, setIsGoingDown]);

   // Header scroll in Y animations
   const headerClasses = () => {
      if (screenWidth < 550) return;

      if (!isHover && isGoingDown) return 'scroll-up-header';
      else return 'scroll-down-header';
   };

   // Actual nav elements
   const navElements = (
      <>
         <Nav onClose={closeMenuHandler} isHome={isHome} />

         <Button className="resume-button" onClick={showResumeHandler}>
            <Trans
               components={{ span: <span style={{ padding: '0 20px' }} /> }}
            >
               {t('header.curriculum')}
            </Trans>
         </Button>
      </>
   );

   // Nav vertical portal
   const menuPortal = ReactDOM.createPortal(
      <div className="header-portal">{navElements}</div>,
      document.getElementById('overlays')
   );

   return (
      <header
         className={headerClasses()}
         onMouseOver={isHoverHandler}
         onMouseOut={isNotHoverHandler}
      >
         {/* backdrop menu vertical */}
         {menuIsShown && screenWidth < 769 && (
            <Backdrop onClose={closeMenuHandler} isBlack={false} />
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
            <a href="/" className="logo-header">
               <img src={logo} alt="D logo" />
            </a>

            {/* menu toggler */}
            {togglerIsShown && screenWidth < 769 && (
               <button className="toggler" onClick={openMenuHandler}>
                  <FontAwesomeIcon icon="fa-solid fa-bars" />
               </button>
            )}

            {/* nav horizontal (displayed when vw > 768px) */}
            {screenWidth > 768 && (
               <div className="header-right">{navElements}</div>
            )}

            {/* nav vertical (displayed when vw < 769px) */}
            {menuIsShown && screenWidth < 769 && menuPortal}
         </div>
      </header>
   );
};

export default Header;
