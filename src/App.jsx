import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";

const App = () => {
   return (
      <>
         <Nav />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate replace to="/" />}></Route>
         </Routes>
      </>
   );
};

export default App;
