import Layout from '../../layout/Layout';
import Introduction from '../../Introduction';
import About from '../../About';
import Projects from '../../Projects';
import Contact from '../../Contact';

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
