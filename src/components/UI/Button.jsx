import classes from '../../assets/scss/partials/_button.module.scss';

const Button = ({ children, className, style, disabled, onClick }) => {
   return (
      <button
         disabled={disabled}
         className={`${classes.button} ${className}`}
         style={style}
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default Button;
