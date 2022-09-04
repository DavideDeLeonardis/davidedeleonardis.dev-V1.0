import Layout from '../../components/Layout/Layout';
import Introduction from '../../components/Introduction';
import About from '../../components/About';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';

const HomePage = () => {
   return (
      <Layout>
			<Introduction />
         <About />
         <Projects />
         <Contact />
      </Layout>
   );
};

export default HomePage;
