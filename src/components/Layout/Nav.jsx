import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { links } from '../../assets/config/navLinks';

import '../../assets/scss/partials/_header.scss';

const Nav = (props) => {
   const linksList = links.map((link, key) => (
      <li className="header-nav-element" key={key} onClick={props.onClose}>
         <a href={link.to}>{link.linkName}</a>
      </li>
   ));

   return (
      <nav>
         <button className="button-close-header" onClick={props.onClose}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
         </button>
         <ul className="list-elements">{linksList}</ul>
      </nav>
   );
};

export default Nav;
