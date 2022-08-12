import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../assets/scss/partials/_arrow-up.scss';

const ArrowUp = () => {
   return (
      <a href="#page-top" className="arrow-up-scroll">
         <FontAwesomeIcon icon="angle-up" />
      </a>
   );
};

export default ArrowUp;
