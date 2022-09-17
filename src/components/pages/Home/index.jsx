import ReactDOM from 'react-dom';

import Introduction from '../../Introduction';
import About from '../../About';
// import Experience from '../../Experience';
import Projects from '../../Projects';
import Contact from '../../Contact';
import ArrowUpPortal from '../../portals/ArrowUpPortal';

const HomePage = () => {
   const arrowUp = ReactDOM.createPortal(
      <ArrowUpPortal />,
      document.getElementById('overlays')
   );

   return (
      <div id="home">
         <Introduction />
         <About />
         {/* <Experience /> */}
         <Projects />
         <Contact />

         {arrowUp}
      </div>
   );
};

export default HomePage;
