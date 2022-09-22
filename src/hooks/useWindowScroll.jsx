import { useEffect, useState, useCallback } from 'react';

const useWindowScroll = (bool) => {
   const [scroll, setScroll] = useState(window.scrollY);
   const [isGoingDown, setIsGoingDown] = useState(bool);

   const scrollHandler = useCallback(
      (e) => {
         const window = e.currentTarget;
         scroll > window.scrollY ? setIsGoingDown(false) : setIsGoingDown(true);
         setScroll(window.scrollY);
      },
      [scroll]
   );

   useEffect(() => {
      setScroll(window.scrollY);
      window.addEventListener('scroll', scrollHandler);

      return () => {
         window.removeEventListener('scroll', scrollHandler);
      };
   }, [scrollHandler]);

   return {
		scroll,
      setScroll,
      isGoingDown,
      setIsGoingDown,
   };
};

export default useWindowScroll;
