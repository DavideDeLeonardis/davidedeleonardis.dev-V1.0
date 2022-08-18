import { Fragment, useRef, useState } from 'react';
import { TextareaAutosize, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';

import useInput from '../../hooks/useInput';

import classes from '../../assets/scss/partials/_contact.module.scss';

const ContactPage = () => {
   const [message, setMessage] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const form = useRef();

   const {
      value: enteredName,
      isValid: enteredNameIsValid,
      hasError: nameInputHasError,
      valueChangeHandler: nameChangedHandler,
      inputBlurHandler: nameBlurHandler,
      reset: resetNameInput,
   } = useInput((value) => value.trim() !== '');

   const {
      value: enteredEmail,
      isValid: enteredEmailIsValid,
      hasError: emailInputHasError,
      valueChangeHandler: emailChangeHandler,
      inputBlurHandler: emailBlurHandler,
      reset: resetEmailInput,
   } = useInput((value) => {
      return value.includes('@') && value.includes('.');
   });

   let formIsValid = false;

   if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
   }

   const sendEmail = (e) => {
      e.preventDefault();

      if (!enteredNameIsValid) return;

      setMessage(null);
      setIsLoading(true);

      emailjs
         .sendForm(
            'service_jlf0fj6',
            'template_84b8ugn',
            form.current,
            '3xD2auX5eX49KmlW8'
         )
         .then(() => {
            setMessage('Message sent!');
            setTimeout(() => setMessage(null), 7500);
            setIsLoading(false);
         })
         .catch(() => {
            setMessage('Something went wrong');
            setIsLoading(false);
         });

      resetNameInput();
      resetEmailInput();
   };

   const hideMessageHandler = () => setMessage(null);

   return (
      <Fragment>
         <form ref={form} onSubmit={sendEmail}>
            <div className={classes['input-container']}>
               <TextField
                  id="outlined-basic"
                  className={classes.input}
                  label="Name"
                  variant="outlined"
                  name="user_name"
                  value={enteredName}
                  onChange={nameChangedHandler}
                  onBlur={nameBlurHandler}
               />
               {nameInputHasError && (
                  <p className={classes.error}>Name must not be empty</p>
               )}
            </div>

            <div className={classes['input-container']}>
               <TextField
                  id="outlined-basic"
                  className={classes.input}
                  label="Email"
                  variant="outlined"
                  name="user_email"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
               />
               {emailInputHasError && (
                  <p className={classes.error}>Please enter a valid email.</p>
               )}
            </div>

            <div className={classes['input-container']}>
               <TextareaAutosize
                  aria-label="minimum height"
                  minRows={3}
                  placeholder="Message"
                  name="message"
               />
            </div>

            <input
               type="submit"
               disabled={!formIsValid}
               value={isLoading ? 'Sending...' : 'Send'}
            />
         </form>

         <div
            className={`
					${classes.message} 
					${message && classes['slide-to-right']}
				`}
         >
            {message}
            <div className={classes.x} onClick={hideMessageHandler}>
               <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </div>
         </div>
      </Fragment>
   );
};

export default ContactPage;
