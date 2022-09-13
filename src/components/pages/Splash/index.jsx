import logo from '../../../assets/images/exagon-logo-blue.png';

import classes from './index.module.scss';

const SplashPage = () => {
   return (
      <div className={classes.container}>
         <div className={classes.splash}>
            <span>
               <img src={logo} alt="logo" />
            </span>
         </div>
      </div>
   );
};

export default SplashPage;
