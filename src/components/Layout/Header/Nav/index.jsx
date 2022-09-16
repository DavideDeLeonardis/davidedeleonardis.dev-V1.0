import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useActive from '../../../../hooks/useActive';
import { useNavTranslate } from '../../../../assets/config/navLinks';

import '../index.scss';

const Nav = ({ onClose }) => {
   const links = useNavTranslate();
   const { isActiveHandler, isActive } = useActive();

   const linksList = links.map((link, key) => (
      <li key={key} className="header-nav-element">
         <a
            href={`/#${link.to}`}
            className={link.id === isActive ? 'active' : ''}
            onClick={(e) => isActiveHandler(e, link.id)}
         >
            {link.linkName}
         </a>
      </li>
   ));

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
