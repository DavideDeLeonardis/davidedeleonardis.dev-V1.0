import Skills from './Skills';
import Slider3d from './Slider-3d';
import Heading from '../UI/Heading';

import classes from './index.module.scss';

const About = () => {
   return (
      <section id="about" className={classes.about}>
         <Heading heading={'About Me'} h1ClassName={classes.h1Main} />
			<Slider3d />
         <Skills />
      </section>
   );
};

export default About;
