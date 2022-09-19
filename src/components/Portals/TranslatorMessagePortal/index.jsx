import { useEffect, useState } from 'react';

import classes from './index.module.scss';

const TranslatorMessagePortal = (showHome = false) => {
   const [messageIsvisible, setMessageIsVisible] = useState(false);

   useEffect(() => {
      setMessageIsVisible(true);
      setTimeout(() => setMessageIsVisible(false), 5000);
   }, [showHome]);

   return messageIsvisible ? (
      <div className={classes.container}>
         Translator at the bottom <br />
         <a href="#footer">VAI</a>
      </div>
   ) : null;
};

export default TranslatorMessagePortal;
