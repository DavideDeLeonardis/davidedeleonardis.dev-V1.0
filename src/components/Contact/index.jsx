import { Fragment, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
   const [message, setMessage] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
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
            setIsLoading(false);
         })
         .catch(() => {
            setMessage('Something went wrong');
            setIsLoading(false);
         });
   };

   return (
      <Fragment>
         <h3>{message}</h3>
         <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <br />
            <input type='text' name='user_name' />
            <br />
            <br />
            <label>Email</label>
            <br />
            <input type='email' name='user_email' />
            <br />
            <br />
            <label>Message</label>
            <br />
            <textarea name='message' />
            <br />
            <br />
            <input type='submit' value={isLoading ? 'Sending...' : 'Send'} />
         </form>
      </Fragment>
   );
};

export default ContactPage;
