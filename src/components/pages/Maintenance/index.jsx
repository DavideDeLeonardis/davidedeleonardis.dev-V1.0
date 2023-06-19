import logo from '../../../assets/images/exagon-logo-blue.png';
import classes from './index.module.scss';

const MaintenancePage = () => {
   return (
      <div className={classes.container}>
         <img className={classes.image} src={logo} alt="D-logo" />
         <h2>SITE'S IN MAINTENANCE!</h2>
      </div>
   );
};

export default MaintenancePage;
