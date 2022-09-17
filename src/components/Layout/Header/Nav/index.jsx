import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useActive from '../../../../hooks/useActive';
import { useNavTranslate } from '../../../../assets/config/navLinks';

import '../index.scss';

const Nav = ({ onClose, isHome }) => {
   const links = useNavTranslate();
   const { isActiveHandler, isActive } = useActive();

   const linkElement = (key, link) => {
      return (
         <li key={key} className="header-nav-element">
            <a
               href={`/#${link.to}`}
               className={link.id === isActive ? 'active' : ''}
               onClick={(e) => isActiveHandler(e, link.id)}
            >
               {link.linkName}
            </a>
         </li>
      );
   };

   const linksList = links.map((link, key) =>
      isHome
         ? link.linkName !== 'Home' && linkElement(key, link)
         : link.linkName === 'Home' && linkElement(key, link)
   );

   return (
      <nav>
         <button className="button-close-header" onClick={onClose}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
         </button>
         <ul className="list-elements">{linksList}</ul>
      </nav>
   );
};

export default Nav;
