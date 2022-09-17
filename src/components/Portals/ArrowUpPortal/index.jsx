import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

const ArrowUp = () => {
   return (
      <a href="#top" className="arrow-up-scroll">
         <FontAwesomeIcon icon="angle-up" />
         <FontAwesomeIcon icon="angle-up" />
      </a>
   );
};

export default ArrowUp;
