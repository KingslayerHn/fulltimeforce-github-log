import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Home from '../pages/Home/Home';
import { routes } from '../router/routerEnum';
import useLoadUser from '../hooks/useLoadUser';

const Router = () => {
  useLoadUser();
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.LOGIN} element={<Home />} />
        <Route path={routes.HOME} element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
