import { useRef, useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import emailjs from '@emailjs/browser';

import useInput from '../../hooks/useInput';
import Message from './Message';

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

   if (enteredNameIsValid && enteredEmailIsValid) formIsValid = true;

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
      <section id="contact" className={classes.contact}>
         <h1>Get In Touch!</h1>
         <span className={classes.text}>
            Feel free to reach out if you want to collaborate with me or just to
            say hi!
         </span>

         <form ref={form} onSubmit={sendEmail}>
            <div className={classes['input-container']}>
               <input
                  className={classes.input}
                  style={
                     nameInputHasError
                        ? {
                             border: '1px solid #d00909',
                             backgroundColor: '#fddddd',
                          }
                        : null
                  }
                  type="name"
                  name="user_name"
                  placeholder="Name"
                  value={enteredName}
                  onChange={nameChangedHandler}
                  onBlur={nameBlurHandler}
               />
               <label className={classes.label}>Name</label>
               {nameInputHasError && (
                  <p className={classes.error}>Name must not be empty.</p>
               )}
            </div>

            <div className={classes['input-container']}>
               <input
                  className={classes.input}
                  style={
                     emailInputHasError
                        ? {
                             border: '1px solid #d00909',
                             backgroundColor: '#fddddd',
                          }
                        : null
                  }
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  value={enteredEmail}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
               />
               <label className={classes.label}>Email</label>
               {emailInputHasError && (
                  <p className={classes.error}>Please enter a valid email.</p>
               )}
            </div>

            <div className={classes['input-container']}>
               <TextareaAutosize
                  aria-label="minimum height"
                  minRows={8}
                  placeholder="Your Message"
                  name="message"
               />
            </div>

            <div className={classes['button-container']}>
               <button
                  disabled={!formIsValid}
                  className={formIsValid ? classes.onHover : null}
                  style={
                     !formIsValid
                        ? {
                             cursor: 'not-allowed',
                             color: 'gray',
                             backgroundColor: '#2463a7',
                          }
                        : { cursor: 'pointer' }
                  }
               >
                  {isLoading ? 'Sending...' : 'Send'}
                  <span />
               </button>
            </div>
         </form>

         <Message message={message} onHideMessage={hideMessageHandler} />
      </section>
   );
};

export default ContactPage;
