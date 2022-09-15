import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Splash from './pages/Splash';
import Home from './pages/Home';
import Project from './pages/MainProject';
import Layout from './layout/Layout';

import '../assets/scss/index.scss';

const App = () => {
   const [showHome, setShowHome] = useState(false);

   useEffect(() => {
      setTimeout(() => setShowHome(true), 0); // 5100
   }, []);

   return (
      <>
         {showHome ? (
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="projects/:project" element={<Project />} />
               </Route>
               <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
         ) : (
            <Splash />
         )}
      </>
   );
};

export default App;
