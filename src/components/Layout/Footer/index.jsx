import dateFormat from 'dateformat';

import useDimensions from '../../../hooks/useDimensions';

import classes from './index.module.scss';

const Footer = () => {
   const { screenWidth } = useDimensions();
	
   const date = dateFormat(new Date(), 'mmmm yyyy');

   return (
      <footer>
         <div className={classes.top}>
            Made by <span className={classes.name}>Davide De Leonardis</span> |
            {screenWidth < 500 && <br />}
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
