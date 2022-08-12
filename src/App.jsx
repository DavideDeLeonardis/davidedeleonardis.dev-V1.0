import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
// import MaintenancePage from './pages/HomePage';

const App = () => {
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/" element={<MaintenancePage />} /> */}
            <Route path="*" element={<Navigate replace to="/" />} />
         </Routes>
      </Layout>
   );
};

export default App;
