import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Error404 from '../pages/error/404';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        {/* Página não encontrada */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
