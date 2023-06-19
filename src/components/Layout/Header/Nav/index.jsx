import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useActive from '../../../../hooks/useActive';
import { useNavTranslate } from '../../../../constants/navLinks';

import '../index.scss';

const Nav = ({ onClose, isHome }) => {
   const links = useNavTranslate();
   const { isActiveHandler, isActive } = useActive();

   const linkElement = ({ to, id, linkName }, key) => {
      return (
         <li key={key} className="header-nav-element">
            <a
               href={`/#${to}`}
               className={id === isActive ? 'active' : ''}
               onClick={(e) => isActiveHandler(e, id)}
            >
               {linkName}
            </a>
         </li>
      );
   };

   const linksList = links.map((link, key) =>
      isHome
         ? link.linkName !== 'Home' && linkElement(link, key)
         : link.linkName === 'Home' && linkElement(link, key)
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
