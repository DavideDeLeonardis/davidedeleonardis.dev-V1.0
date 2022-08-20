import classes from '../../assets/scss/partials/_backdrop-portal.module.scss';

const Backdrop = ({ onClose }) => {
   return <div className={classes.backdrop} onClick={onClose} />;
};

export default Backdrop;
