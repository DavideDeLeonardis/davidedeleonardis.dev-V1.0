import { useState } from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SelectLanguage from '../../../ui/SelectLanguage';
import { languages } from '../../../../assets/config/languages';
import { useNavTranslate } from '../../../../assets/config/navLinks';

import '../index.scss';

const Nav = ({ onClose }) => {
   const [isActive, setIsActive] = useState();
   const links = useNavTranslate();

   // Class active on single link
   const isActiveHandler = (e, id) => {
      e.stopPropagation();
      setIsActive(id);
   };

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

   // Change site language
   const onChangeLanguage = (event) => {
      i18next.changeLanguage(event.target.value);
   };

   return (
      <nav>
         <button className="button-close-header" onClick={onClose}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
         </button>
         <ul className="list-elements">
            {linksList}
            <li className="header-nav-element">
               <SelectLanguage
                  selectElements={languages}
                  onChange={onChangeLanguage}
               />
            </li>
         </ul>
      </nav>
   );
};

export default Nav;
