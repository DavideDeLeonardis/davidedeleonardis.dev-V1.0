import { useEffect, useState } from 'react';

import Portal from '../index';

import classes from './index.module.scss';

const TranslatorMessagePortal = (showHome = false) => {
   const [messageIsvisible, setMessageIsVisible] = useState(false);

   useEffect(() => {
      setMessageIsVisible(true);
      setTimeout(() => setMessageIsVisible(false), 5000);
   }, [showHome]);

   return messageIsvisible ? (
      <Portal>
         <div className={classes.container}>
            Translator at the bottom <br />
            <a href="#footer">VAI</a>
         </div>
      </Portal>
   ) : null;
};

export default TranslatorMessagePortal;
