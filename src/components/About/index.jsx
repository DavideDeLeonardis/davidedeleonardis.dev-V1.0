import { Fragment } from 'react';

import Presentation from './Presentation';
import Skills from './Skills';
// import Carousel from './Carousel';

const About = () => {
   return (
      <Fragment>
         <Presentation />
			<Skills />
      </Fragment>
   );
};

export default About;
