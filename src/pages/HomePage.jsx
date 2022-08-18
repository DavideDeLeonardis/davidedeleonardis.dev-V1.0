import Layout from '../components/Layout/Layout';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage = () => {
   return (
      <Layout>
         <section id="about">
            <About />
         </section>

         <section id="projects">
            <Projects />
         </section>

         <section id="contact">
            <Contact />
         </section>
      </Layout>
   );
};

export default HomePage;
