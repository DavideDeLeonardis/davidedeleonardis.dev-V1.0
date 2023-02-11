// Libraries
import { useState } from 'react';

const useInput = (validateValue) => {
   // Check if input has been touched and check inputs values validity

   const [enteredValue, setEnteredValue] = useState('');
   const [isTouched, setIsTouched] = useState(false);

   const valueIsValid = validateValue(enteredValue);
   const hasError = !valueIsValid && isTouched;

   const valueChangeHandler = (e) => setEnteredValue(e.target.value);

   const inputBlurHandler = () => setIsTouched(true);

   const reset = () => {
      setEnteredValue('');
      setIsTouched(false);
   };

   return {
      value: enteredValue,
      isValid: valueIsValid,
      hasError,
      valueChangeHandler,
      inputBlurHandler,
      reset,
   };
};

export default useInput;
