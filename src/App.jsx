// Libraries
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Splash from './components/pages/Splash';
import Home from './components/pages/Home';
import Project from './components/pages/MainProject';
import Maintenance from './components/pages/Maintenance';
import Archive from './components/pages/Archive';
import Layout from './components/layout/Layout';

// Utilities
import PopUpMessage from './components/portals/TranslatorMessagePortal';
import ArrowUp from './components/portals/ArrowUpPortal';

// SCSS
import './assets/scss/index.scss';

const App = () => {
	return <Maintenance />
	
   const [showHome, setShowHome] = useState(false);

   useEffect(() => {
      setTimeout(() => setShowHome(true), 1); // 5100
   }, []);

   if (!showHome) return <Splash />;

   return (
      <Routes>
         <Route path="/">
            <Route
               index
               element={
                  <Layout isHome>
                     <Home />
                     <PopUpMessage showHome={showHome} />
                     <ArrowUp />
                  </Layout>
               }
            />
            <Route path="projects/">
               <Route
                  path=":project"
                  element={
                     <Layout isHome={false}>
                        <Project />
                     </Layout>
                  }
               />
               <Route index element={<Navigate replace to="/" />} />
            </Route>
            <Route
               path="archive"
               element={
                  <Layout isHome={false}>
                     <Archive />
                     <ArrowUp />
                  </Layout>
               }
            />
         </Route>
         <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
   );
};

export default App;
