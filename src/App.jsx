import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SplashPage from './pages/SplashPage';
// import MaintenancePage from './pages/HomePage';

const App = () => {
   const [showHome, setShowHome] = useState(false);

   setTimeout(() => {
      setShowHome(true);
   }, 200);

   return (
      <Routes>
         <Route path="/" element={showHome ? <HomePage /> : <SplashPage />} />
         {/* <Route path="/" element={<MaintenancePage />} /> */}
         <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
   );
};

export default App;
