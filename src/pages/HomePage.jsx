import { Fragment } from 'react';

import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage = () => {
   return (
      <Fragment>
         <section id="about">
            <About />
         </section>

         <section id="projects">
            <Projects />
         </section>

         <section id="contact">
            <Contact />
         </section>
      </Fragment>
   );
};

export default HomePage;
