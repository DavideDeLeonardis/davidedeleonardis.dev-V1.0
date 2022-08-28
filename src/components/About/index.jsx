import Presentation from './Presentation';
import Skills from './Skills';
import Heading from '../UI/Heading';

import classes from '../../assets/scss/partials/_about.module.scss';

const About = () => {
   return (
      <section id="about" className={classes.about}>
         <Presentation />
         <Heading heading={'About Me'} h1ClassName={classes.h1Main} />
         <Skills />
      </section>
   );
};

export default About;
