// Libraries
import { Link } from 'react-router-dom';

const LinkWithScrollOnTop = ({ state, endpoint, content }) => {
   return (
      <Link
         to={endpoint}
         state={state}
         onMouseEnter={() =>
            (document.documentElement.style.scrollBehavior = 'initial')
         }
         onMouseLeave={() =>
            (document.documentElement.style.scrollBehavior = 'smooth')
         }
      >
         {content}
      </Link>
   );
};

export default LinkWithScrollOnTop;
