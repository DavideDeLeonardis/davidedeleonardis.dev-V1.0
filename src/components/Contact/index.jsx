import { Fragment, useRef, useState } from 'react';
import { TextareaAutosize, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import emailjs from '@emailjs/browser';

import classes from '../../assets/scss/partials/_contact.module.scss';

const ContactPage = () => {
   const [message, setMessage] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

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
   };

   const hideMessageHandler = () => setMessage(null);

   return (
      <Fragment>
         <form ref={form} onSubmit={sendEmail}>
            <TextField
               id="outlined-basic"
               label="Name"
               variant="outlined"
               name="user_name"
            />
            <br />
            <TextField
               id="outlined-basic"
               label="Email"
               variant="outlined"
               name="user_email"
            />
            <br />
            <TextareaAutosize
               aria-label="minimum height"
               minRows={3}
               placeholder="Message"
               style={{ width: 200 }}
               name="message"
            />
            <br />
            <input type="submit" value={isLoading ? 'Sending...' : 'Send'} />
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
