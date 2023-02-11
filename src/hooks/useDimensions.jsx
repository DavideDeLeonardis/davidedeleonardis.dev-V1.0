// Libraries
import { useState, useEffect } from 'react';

const useDimensions = () => {
   // Detect window dimensions and return dimensions based on resizing

   const [dimensions, setDimensions] = useState({
      screenHeight: window.innerHeight,
      screenWidth: window.innerWidth,
   });

   useEffect(() => {
      const handleResize = () => {
         setDimensions({
            screenHeight: window.innerHeight,
            screenWidth: window.innerWidth,
         });
      };

      window.addEventListener('resize', handleResize);

      return (_) => window.removeEventListener('resize', handleResize);
   });

   return dimensions;
};

export default useDimensions;
