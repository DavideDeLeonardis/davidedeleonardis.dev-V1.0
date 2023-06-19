import { useEffect, useState, useCallback } from 'react';

const useWindowScroll = (bool) => {
   // Detect page scroll movement and return scroll data

   const [scroll, setScroll] = useState(window.scrollY);
   const [isGoingDown, setIsGoingDown] = useState(bool);

   const scrollHandler = useCallback(
      (e) => {
         scroll > e.currentTarget.scrollY ? setIsGoingDown(false) : setIsGoingDown(true);
         setScroll(e.currentTarget.scrollY);
      },
      [scroll]
   );

   useEffect(() => {
      setScroll(window.scrollY);
      window.addEventListener('scroll', scrollHandler);

      return () => window.removeEventListener('scroll', scrollHandler);
   }, [scrollHandler]);

   return {
      scroll,
      setScroll,
      isGoingDown,
      setIsGoingDown,
   };
};

export default useWindowScroll;
