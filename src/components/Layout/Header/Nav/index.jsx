import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { links } from '../../../../assets/config/navLinks';

import '../index.scss';

const Nav = ({ onClose }) => {
   const linksList = links.map((link, key) => (
      <li className="header-nav-element" key={key}>
         <a href={link.to}>{link.linkName}</a>
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
