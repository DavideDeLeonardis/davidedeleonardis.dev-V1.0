import { useState } from 'react';

const useActive = (somethingActive) => {
   const [isActive, setIsActive] = useState(somethingActive);

   const isActiveHandler = (e, id) => {
      e.stopPropagation();
      setIsActive(id);
   };

   return { isActive, isActiveHandler };
};

export default useActive;
