import { Fragment } from 'react';

import '../../assets/scss/partials/_heading.module.scss';

const Heading = ({ heading, h1ClassName, subheading, pClassName }) => {
   return (
      <Fragment>
         <h1 className={`${h1ClassName}`}>{heading}</h1>
         <p className={`${pClassName}`}>{subheading}</p>
      </Fragment>
   );
};

export default Heading;
