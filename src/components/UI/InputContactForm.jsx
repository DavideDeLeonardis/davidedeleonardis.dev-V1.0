import classes from '../../assets/scss/partials/_contact.module.scss';

const InputForm = ({
   value,
   type,
   name,
   onChange,
   onBlur,
   label,
   error,
   errorDescription,
}) => {
   return (
      <div className={classes['input-container']}>
         <input
            className={classes.input}
            style={
               error
                  ? {
                       border: '1px solid #d00909',
                       backgroundColor: '#fddddd',
                    }
                  : null
            }
            type={type}
            name={name}
            placeholder={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
         />
         <label className={classes.label}>{label}</label>
         {error && <p className={classes.error}>{errorDescription}</p>}
      </div>
   );
};

export default InputForm;
