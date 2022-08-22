import classes from '../../assets/scss/partials/_backdrop-portal.module.scss';

const Backdrop = ({ onClose, isBlack }) => {
   return (
      <div
         className={`
				${classes.backdrop}
				${isBlack ? classes['is-black'] : null}
			`}
         onClick={onClose}
      />
   );
};

export default Backdrop;
