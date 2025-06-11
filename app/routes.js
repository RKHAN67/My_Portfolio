import { RoutePaths } from './constants/route-path';
import Home from './pages/home.jsx';
import AboutUs from './pages/ab.jsx';
import MainLayout from './layout/MainLayout';

import { Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={RoutePaths.HOME} element={<Home />} />
        <Route path={RoutePaths.ABOUT_US} element={<AboutUs />} />
      </Route>
    </Routes>
  );
}
