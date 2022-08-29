import Layout from '../../components/Layout/Layout';
import Presentation from '../../components/Presentation';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

const HomePage = () => {
   return (
      <Layout>
			<Presentation />
         <About />
         <Projects />
         <Contact />
      </Layout>
   );
};

export default HomePage;
