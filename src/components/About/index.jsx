import { Fragment } from 'react';

import Presentation from './Presentation';
import Skills from './Skills';
import QRcode from './QRcode';
// import Carousel from './Carousel';

const About = () => {
   return (
      <Fragment>
         <Presentation />
			<Skills />
         <QRcode />
      </Fragment>
   );
};

export default About;
