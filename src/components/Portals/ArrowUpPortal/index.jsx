// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Portal from '../';

// SCSS
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
