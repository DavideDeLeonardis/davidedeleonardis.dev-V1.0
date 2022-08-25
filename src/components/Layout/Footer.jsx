import dateFormat from 'dateformat';

import react_logo from '../../assets/images/logo-react.png';

import classes from '../../assets/scss/partials/_footer.module.scss';

const Footer = () => {
   const date = dateFormat(new Date(), 'mmmm yyyy');

   return (
      <footer>
         <div className={classes.top}>
            Made by<span>&nbsp; Davide De Leonardis&nbsp;</span> with&nbsp;
         </div>
         <img src={react_logo} alt="React" />
         <div>
            <span className={classes.c}>&#169;</span>
            <span> August 2022 -</span>
            <span> {date}</span>
         </div>
      </footer>
   );
};

export default Footer;
