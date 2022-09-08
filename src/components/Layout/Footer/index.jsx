import dateFormat from 'dateformat';

import classes from './index.module.scss';

const Footer = () => {
   const date = dateFormat(new Date(), 'mmmm yyyy');

   return (
      <footer>
         <div className={classes.top}>
            Made by <span>Davide De Leonardis</span>
         </div>
         <a
            className={classes.code}
            href="https://github.com/DavideDeLeonardis/davidedeleonardis.dev-V1.0"
            target="_blank"
            rel="noreferrer"
         >
            Source code available
         </a>
         <div>
            <span className={classes.c}>&#169;</span>
            <span> August 2022 -</span>
            <span> {date}</span>
         </div>
      </footer>
   );
};

export default Footer;
