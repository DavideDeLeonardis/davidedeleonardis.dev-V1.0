import { useState, useEffect } from 'react';

const useDimensions = () => {
   const [dimensions, setDimensions] = useState({
      height: window.innerHeight,
      width: window.innerWidth,
   });

   useEffect(() => {
      const handleResize = () => {
         setDimensions({
            height: window.innerHeight,
            width: window.innerWidth,
         });
      };

      window.addEventListener('resize', handleResize);

      return (_) => {
         window.removeEventListener('resize', handleResize);
      };
   });

   return dimensions;
};

export default useDimensions;
