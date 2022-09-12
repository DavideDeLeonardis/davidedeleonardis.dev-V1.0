import i18n from 'i18next';
import dateFormat from 'dateformat';

import classes from './index.module.scss';

const Footer = () => {
   const date = dateFormat(new Date(), 'mmmm yyyy');

   const onChangeLanguage = (event) => {
      i18n.changeLanguage(event.target.value);
   };

   return (
      <footer>
         <div>
            <select onChange={onChangeLanguage}>
               <option value="en">English</option>
               <option value="it">Italiano</option>
            </select>
         </div>
         <div className={classes.top}>
            Made by <span className={classes.name}>Davide De Leonardis</span> |
            <a
               className={classes.code}
               href="https://github.com/DavideDeLeonardis/davidedeleonardis.dev-V1.0"
               target="_blank"
               rel="noreferrer"
            >
               Source code available
            </a>
         </div>
         <span className={classes.c}>&#169;</span>
         <span> August 2022 -</span>
         <span> {date}</span>
      </footer>
   );
};

export default Footer;
