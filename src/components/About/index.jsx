import Presentation from './Presentation';
import Skills from './Skills';
import Heading from '../UI/Heading';

import classes from '../../assets/scss/partials/_about.module.scss';

const About = () => {
   return (
      <section id="about" className={classes.about}>
         <Heading heading={'About Me'} />
         <Presentation />
         <Skills />
      </section>
   );
};

export default About;
