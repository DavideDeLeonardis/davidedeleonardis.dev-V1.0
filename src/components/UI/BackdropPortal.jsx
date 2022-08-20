import classes from '../../assets/scss/partials/_backdrop-portal.module.scss';

const Backdrop = ({ onClose, isBlack }) => {
   return (
      <div
         className={classes.backdrop}
         style={
            isBlack
               ? { backgroundColor: 'rgba(0, 0, 0, 0.75)' }
               : { backgroundColor: 'transparent' }
         }
         onClick={onClose}
      />
   );
};

export default Backdrop;
