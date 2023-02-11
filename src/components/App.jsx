// Libraries
import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Splash from './pages/Splash';
import Home from './pages/Home';
import Project from './pages/MainProject';
import Archive from './pages/Archive';
import Layout from './layout/Layout';

// Utilities
import PopUpMessage from './portals/TranslatorMessagePortal';
import ArrowUp from './portals/ArrowUpPortal';

// SCSS
import '../assets/scss/index.scss';

const App = () => {
   const [showHome, setShowHome] = useState(false);

   useEffect(() => {
      setTimeout(() => setShowHome(true), 1); // 5100
   }, []);

   return showHome ? (
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
   ) : (
      <Splash />
   );
};

export default App;
