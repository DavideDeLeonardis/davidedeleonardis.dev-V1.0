import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import dateFormat from 'dateformat';

import SelectLanguage from '../../ui/SelectLanguage';
import useScreenDimensions from '../../../hooks/useScreenDimensions';
import { languages } from '../../../constants/languages';

import classes from './index.module.scss';

const Footer = () => {
   const { screenWidth } = useScreenDimensions();
   const { t } = useTranslation();

   // Change site language
   const onChangeLanguage = (event) =>
      i18next.changeLanguage(event.target.value);

   const date = dateFormat(new Date(), 'mmmm yyyy');

   return (
      <footer id="footer">
         <div className={classes.top}>
            <div>
               <SelectLanguage
                  selectElements={languages}
                  onChange={onChangeLanguage}
               />
            </div>
            Made by <span className={classes.name}>Davide De Leonardis</span> |
            {screenWidth < 500 && <br />}
            <a
               className={classes.code}
               href="https://github.com/DavideDeLeonardis/davidedeleonardis.dev-V1.0"
               target="_blank"
               rel="noreferrer"
            >
               {t('footer.code')}
            </a>
         </div>
         <span className={classes.c}>&#169;</span>
         <span> August 2022 - {date}</span>
      </footer>
   );
};

export default Footer;
