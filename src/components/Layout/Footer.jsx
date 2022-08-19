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
         <br />
         <span>
            <span className={classes.c}>&#169;</span>&nbsp; August 2022&nbsp; -
            &nbsp;{date}
         </span>
      </footer>
   );
};

export default Footer;
