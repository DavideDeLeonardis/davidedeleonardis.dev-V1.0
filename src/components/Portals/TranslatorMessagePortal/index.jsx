import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Portal from '../index';

import classes from './index.module.scss';

const TranslatorMessagePortal = (showHome = false) => {
   const [messageIsvisible, setMessageIsVisible] = useState(false);

   useEffect(() => {
      setMessageIsVisible(true);
      setTimeout(() => setMessageIsVisible(false), 7000); // 3000ms for animation-delay, 4000ms screen time
   }, [showHome]);

   const hideMessageHandler = () => {
      setMessageIsVisible(false);
   };

   return messageIsvisible ? (
      <Portal>
         <div className={classes.container} onClick={hideMessageHandler}>
            <a href="#footer">
               <FontAwesomeIcon
                  icon="fa-solid fa-arrow-down"
                  className={classes.icon}
               />
               Go to translator
            </a>
            <div className={classes.x} onClick={hideMessageHandler}>
               <FontAwesomeIcon icon="fa-solid fa-xmark" />
            </div>
         </div>
      </Portal>
   ) : null;
};

export default TranslatorMessagePortal;
