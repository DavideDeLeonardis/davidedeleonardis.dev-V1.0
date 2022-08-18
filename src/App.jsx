import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import SplashPage from './pages/SplashPage';
import { HomePage } from './pages';
// import ArchivePage from './pages/ArchivePage';
// import MaintenancePage from './pages/HomePage';

const App = () => {
   const [showHome, setShowHome] = useState(false);

   setTimeout(() => setShowHome(true), 200);

   return (
      <Routes>
         <Route path="/" element={showHome ? <HomePage /> : <SplashPage />} />
         <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
   );
};

export default App;
