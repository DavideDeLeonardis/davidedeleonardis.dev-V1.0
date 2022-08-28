import classes from './_button.module.scss';

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
