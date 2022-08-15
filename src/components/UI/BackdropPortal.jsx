import classes from '../../assets/scss/partials/_backdrop-portal.module.scss';

const Backdrop = (props) => {
   return <div className={classes.backdrop} onClick={props.onClose} />;
};

export default Backdrop;
