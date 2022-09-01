import { useRef, useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import emailjs from '@emailjs/browser';

import useInput from '../../hooks/useInput';
import Input from './Input';
import Message from './Message';
import Button from '../UI/Button';
import Heading from '../UI/Heading';

import classes from './index.module.scss';

const ContactPage = () => {
   const [message, setMessage] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [isValid, setIsValid] = useState(false);
   const form = useRef();

   // Name
   const {
      value: enteredName,
      isValid: enteredNameIsValid,
      hasError: nameInputHasError,
      valueChangeHandler: nameChangedHandler,
      inputBlurHandler: nameBlurHandler,
      reset: resetNameInput,
   } = useInput((value) => value.trim() !== '');

   // Email
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

   // Form submitting
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
            setIsValid(true);
            setTimeout(() => setMessage(null), 7500);
            setIsLoading(false);
         })
         .catch(() => {
            setMessage(
               'Something went wrong, click on mail icon in the right of page'
            );
            setIsValid(false);
            setIsLoading(false);
         });

      resetNameInput();
      resetEmailInput();
   };

   const hideMessageHandler = () => setMessage(null);

   return (
      <section id="contact" className={classes.contact}>
         <Heading
            heading={'Get In Touch!'}
            h1ClassName={classes.h1}
            subheading={
               'Feel free to reach out if you want to collaborate with me or just to say hi!'
            }
            pClassName={classes.text}
         />

         <form ref={form} onSubmit={sendEmail}>
            <Input
               value={enteredName}
               type="name"
               name="user_name"
               onChange={nameChangedHandler}
               onBlur={nameBlurHandler}
               label="Name"
               error={nameInputHasError}
               errorDescription="Name must not be empty."
            />

            <Input
               value={enteredEmail}
               type="email"
               name="user_email"
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler}
               label="Email"
               error={emailInputHasError}
               errorDescription="Please enter a valid email."
            />

            <div className={classes['input-container']}>
               <TextareaAutosize
                  aria-label="minimum height"
                  minRows={7}
                  placeholder="Your Message"
                  name="message"
               />
            </div>

            <div className={classes['button-container']}>
               <Button
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
               </Button>
            </div>
         </form>

         <Message
            message={message}
            isValid={isValid}
            onHideMessage={hideMessageHandler}
         />
      </section>
   );
};

export default ContactPage;
