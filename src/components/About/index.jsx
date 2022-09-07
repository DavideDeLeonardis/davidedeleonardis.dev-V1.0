import Skills from './Skills';
import Heading from '../ui/Heading';

import classes from './index.module.scss';

const About = () => {
   return (
      <section id="about" className={classes.about}>
         <Heading heading={'About Me'} h1ClassName={classes.h1Main} />
         <Skills />
      </section>
   );
};

export default About;
