import { Fragment } from 'react';

import '../../assets/scss/partials/_heading.module.scss';

const Heading = ({
   heading,
   h1ClassName,
   subheading,
   pClassName,
   sub_subheading,
}) => {
   return (
      <Fragment>
         <h1 className={`${h1ClassName}`}>{heading}</h1>
         <p className={`${pClassName}`}>{subheading}</p>
         <p style={{ margin: '0' }}>{sub_subheading}</p>
      </Fragment>
   );
};

export default Heading;
