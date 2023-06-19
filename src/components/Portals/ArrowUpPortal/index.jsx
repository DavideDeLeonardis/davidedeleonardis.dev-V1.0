import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Portal from '../';

import './index.scss';

const ArrowUp = () => {
   return (
      <Portal>
         <a href="#top" className="arrow-up-scroll">
            <FontAwesomeIcon icon="angle-up" />
            <FontAwesomeIcon icon="angle-up" />
         </a>
      </Portal>
   );
};

export default ArrowUp;
