import Introduction from '../../Introduction';
import About from '../../About';
// import Experience from '../../Experience';
import Projects from '../../Projects';
import Contact from '../../Contact';

const HomePage = () => {
   return (
      <div id="home">
         <Introduction />
         <About />
         {/* <Experience /> */}
         <Projects />
         <Contact />
      </div>
   );
};

export default HomePage;
