import { Fragment } from 'react';

import Presentation from './Presentation';
import Carousel from './Carousel';
import qrcode from '../../assets/images/qrcode.png';

const About = () => {
   return (
      <Fragment>
         <Presentation />
         <Carousel />
         <div>
            <img width='200' src={qrcode} alt='qrcode of curriculum vitae' />
         </div>
      </Fragment>
   );
};

export default About;
